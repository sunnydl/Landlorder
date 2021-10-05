package sunny.landlorder.landlorder_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sunny.landlorder.landlorder_backend.domain.Tenant;

public interface TenantRepository extends JpaRepository<Tenant, Long> {
}
