package sunny.landlorder.landlorder_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sunny.landlorder.landlorder_backend.domain.AppUser;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByUsername(String username);
}
