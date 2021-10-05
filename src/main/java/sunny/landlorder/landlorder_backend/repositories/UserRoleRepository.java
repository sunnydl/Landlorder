package sunny.landlorder.landlorder_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sunny.landlorder.landlorder_backend.domain.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    UserRole findByName(String name);
}
