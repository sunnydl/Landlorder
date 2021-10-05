package sunny.landlorder.landlorder_backend.service;

import sunny.landlorder.landlorder_backend.DTO.PropertyDTO;
import sunny.landlorder.landlorder_backend.domain.Property;

import java.util.List;
public interface PropertyService {
    Property addProperty(PropertyDTO propertyDTO);
    List<PropertyDTO> getProperties(String username);
    Property getProperty(String propertyName);
    Property getPropertyById(Long id);
    PropertyDTO deleteProperty(Long id);
}
