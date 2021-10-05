package sunny.landlorder.landlorder_backend.DTO;

import lombok.Data;

@Data
public class TenantDTO {
    private Long id;
    private String ownerName;
    private String propertyName;
    private String name;
    private String phoneNumber;
    private String email;
    private Integer rentAmount;
}
