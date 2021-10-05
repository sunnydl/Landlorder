package sunny.landlorder.landlorder_backend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import sunny.landlorder.landlorder_backend.DTO.PropertyDTO;
import sunny.landlorder.landlorder_backend.domain.AppUser;
import sunny.landlorder.landlorder_backend.domain.Property;
import sunny.landlorder.landlorder_backend.service.PropertyService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.HttpStatus.FORBIDDEN;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/property")
@Slf4j
public class PropertyController {

    private final PropertyService propertyService;

    @PostMapping("/add")
    public ResponseEntity<Property> addProperty(@RequestBody PropertyDTO propertyDTO) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/register").toUriString());
        return ResponseEntity.created(uri).body(propertyService.addProperty(propertyDTO));
    }

    @GetMapping
    public ResponseEntity<List<PropertyDTO>> getProperties(
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(authorizationHeader!=null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refreshToken = authorizationHeader.split(" ")[1];
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier jwtVerifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = jwtVerifier.verify(refreshToken);
                String username = decodedJWT.getSubject();
                return ResponseEntity.ok().body(propertyService.getProperties(username));
            } catch (Exception exception) {
                log.error("Error logging in: {}", exception.getMessage());
                response.setHeader("error", exception.getMessage());
                response.setStatus(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", exception.getMessage());
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Missing refresh token");
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PropertyDTO> deleteProperty(@PathVariable Long id) {
        log.info("Property to be deleted is {}", id);
        return ResponseEntity.ok().body(propertyService.deleteProperty(id));
    }
}
