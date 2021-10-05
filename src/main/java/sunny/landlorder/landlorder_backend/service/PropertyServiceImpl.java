package sunny.landlorder.landlorder_backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import sunny.landlorder.landlorder_backend.DTO.PropertyDTO;
import sunny.landlorder.landlorder_backend.domain.AppUser;
import sunny.landlorder.landlorder_backend.domain.Property;
import sunny.landlorder.landlorder_backend.domain.Tenant;
import sunny.landlorder.landlorder_backend.exception.DuplicateResourceException;
import sunny.landlorder.landlorder_backend.exception.ResourceNotFoundException;
import sunny.landlorder.landlorder_backend.repositories.PropertyRepository;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;
    private final AppUserService appUserService;

    @Override
    public Property addProperty(PropertyDTO propertyDTO) {
        if(checkProperty(propertyDTO.getName())!=null) {
            throw new DuplicateResourceException("Property with this name already exits");
        } else {
            AppUser owner = appUserService.getUser(propertyDTO.getOwnerName());

            Property property = new Property();
            property.setAppUser(owner);
            property.setName(propertyDTO.getName());
            property.setState(propertyDTO.getState());
            property.setCountry(propertyDTO.getCountry());
            property.setStreetAddress(propertyDTO.getStreetAddress());
            property.setZipCode(propertyDTO.getZipCode());

            Property property1 = propertyRepository.save(property);
            owner.getProperties().add(property1);
            return property1;
        }
    }

    @Override
    public List<PropertyDTO> getProperties(String username) {
        List<Property> properties = appUserService.getUser(username).getProperties()
                .stream()
                .sorted(Comparator.comparing(Property::getId))
                .collect(Collectors.toList());

        List<PropertyDTO> propertyDTOList = new ArrayList<>();
        properties.forEach((property -> {
            List<Tenant> tenants = property.getTenants()
                    .stream()
                    .sorted(Comparator.comparing(Tenant::getId))
                    .collect(Collectors.toList());
            PropertyDTO propertyDTO = new PropertyDTO();
            propertyDTO.setTenants(tenants);
            propertyDTO.setName(property.getName());
            propertyDTO.setCountry(property.getCountry());
            propertyDTO.setState(property.getState());
            propertyDTO.setStreetAddress(property.getStreetAddress());
            propertyDTO.setZipCode(property.getZipCode());
            propertyDTO.setId(property.getId());
            propertyDTOList.add(propertyDTO);
        }));

        return propertyDTOList;
    }

    @Override
    public Property getProperty(String propertyName) {
        return propertyRepository.findByName(propertyName)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("Cannot find property with name " + propertyName);
                });
    }

    @Override
    public Property getPropertyById(Long id) {
        return propertyRepository.findById(id).orElseThrow(() -> {
            return new ResourceNotFoundException("Cannot find property with id " + id);
        });
    }

    @Override
    public PropertyDTO deleteProperty(Long id) {
        Property property = getPropertyById(id);
        propertyRepository.delete(property);
        PropertyDTO deletedProperty = new PropertyDTO();
        deletedProperty.setId(property.getId());
        return deletedProperty;
    }

    public Property checkProperty(String name) {
        return propertyRepository.findByName(name).orElse(null);
    }
}
