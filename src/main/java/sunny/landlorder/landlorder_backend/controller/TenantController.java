package sunny.landlorder.landlorder_backend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import sunny.landlorder.landlorder_backend.DTO.TenantDTO;
import sunny.landlorder.landlorder_backend.service.TenantService;

import java.net.URI;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tenant")
@Slf4j
public class TenantController {

    private final TenantService tenantService;

    @PostMapping("/add")
    public ResponseEntity<TenantDTO> addTenant(@RequestBody TenantDTO tenantDTO) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/tenant/add").toUriString());
        return ResponseEntity.created(uri).body(tenantService.addTenant(tenantDTO));
    }
}
