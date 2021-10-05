package sunny.landlorder.landlorder_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sunny.landlorder.landlorder_backend.domain.Property;

import java.util.Optional;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    Optional<Property> findByName(String name);
}
