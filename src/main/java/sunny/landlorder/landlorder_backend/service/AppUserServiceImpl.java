package sunny.landlorder.landlorder_backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sunny.landlorder.landlorder_backend.domain.AppUser;
import sunny.landlorder.landlorder_backend.domain.UserRole;
import sunny.landlorder.landlorder_backend.exception.DuplicateResourceException;
import sunny.landlorder.landlorder_backend.exception.ResourceNotFoundException;
import sunny.landlorder.landlorder_backend.repositories.AppUserRepository;
import sunny.landlorder.landlorder_backend.repositories.UserRoleRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AppUserServiceImpl implements AppUserService, UserDetailsService {

    private final AppUserRepository appUserRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findByUsername(username).orElse(null);
        if(appUser==null) {
            log.error("User not found with name " + username);
            throw new UsernameNotFoundException("User not found with name " + username);
        } else {
            log.info("User found with name " + username);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        appUser.getUserRoles().forEach(userRole -> {
            authorities.add(new SimpleGrantedAuthority(userRole.getName()));
        });
        return new org.springframework.security.core.userdetails.User(appUser.getUsername(), appUser.getPassword(), authorities);
    }

    @Override
    public AppUser saveUser(AppUser appUser) {
        log.info("Saving new user {}", appUser);
        if(checkUser(appUser.getUsername())!=null) {
            throw new DuplicateResourceException("User with same username already exits");
        } else {
            appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
            return appUserRepository.save(appUser);
        }
    }

    @Override
    public UserRole saveRole(UserRole userRole) {
        log.info("Saving new role {}", userRole);
        return userRoleRepository.save(userRole);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adding new role {} to user {}", roleName, username);
        AppUser appUser = getUser(username);
        UserRole userRole = userRoleRepository.findByName(roleName);
        appUser.getUserRoles().add(userRole);
        appUserRepository.save(appUser);
    }

    @Override
    public AppUser getUser(String username) {
        log.info("Finding user {}", username);
        return appUserRepository.findByUsername(username).orElseThrow(() -> {
            return new ResourceNotFoundException("Cannot find user with username: " + username);
        });
    }

    public AppUser checkUser(String username) {
        return appUserRepository.findByUsername(username).orElse(null);
    }

    @Override
    public List<AppUser> getAllUsers() {
        log.info("Getting all users");
        return appUserRepository.findAll();
    }
}
