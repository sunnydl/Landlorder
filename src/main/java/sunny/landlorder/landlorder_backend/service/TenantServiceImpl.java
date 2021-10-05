package sunny.landlorder.landlorder_backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import sunny.landlorder.landlorder_backend.DTO.TenantDTO;
import sunny.landlorder.landlorder_backend.domain.Property;
import sunny.landlorder.landlorder_backend.domain.Tenant;
import sunny.landlorder.landlorder_backend.repositories.TenantRepository;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TenantServiceImpl implements TenantService {

    private final TenantRepository tenantRepository;
    private final PropertyService propertyService;

    @Override
    public TenantDTO addTenant(TenantDTO tenantDTO) {
        Property property = propertyService.getProperty(tenantDTO.getPropertyName());

        if(property.getAppUser().getUsername().equals(tenantDTO.getOwnerName())) {
            Tenant tenant = new Tenant();
            tenant.setName(tenantDTO.getName());
            tenant.setEmail(tenantDTO.getEmail());
            tenant.setPhoneNumber(tenantDTO.getPhoneNumber());
            tenant.setRentAmount(tenantDTO.getRentAmount());
            tenant.setProperty(property);
            Tenant savedTenant = tenantRepository.save(tenant);
            property.getTenants().add(savedTenant);

            TenantDTO returnTenant = new TenantDTO();
            returnTenant.setPropertyName(savedTenant.getProperty().getName());
            returnTenant.setEmail(savedTenant.getEmail());
            returnTenant.setPhoneNumber(savedTenant.getPhoneNumber());
            returnTenant.setRentAmount(savedTenant.getRentAmount());
            returnTenant.setName(savedTenant.getName());
            return returnTenant;
        } // todo: need to refactor this later to a better validation
        return new TenantDTO();
    }
}
