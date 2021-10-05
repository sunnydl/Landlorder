package sunny.landlorder.landlorder_backend.DTO;

import lombok.Data;
import sunny.landlorder.landlorder_backend.domain.Tenant;

import java.util.List;

@Data
public class PropertyDTO {
    private Long id;
    private String name;
    private String ownerName;
    private String streetAddress;
    private String state;
    private String country;
    private String zipCode;
    private List<Tenant> tenants;
}
