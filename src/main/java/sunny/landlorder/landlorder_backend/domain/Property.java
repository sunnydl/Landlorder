package sunny.landlorder.landlorder_backend.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;
    private String streetAddress;
    private String state;
    private String country;
    private String zipCode;

    @ManyToOne
    @JsonBackReference
    private AppUser appUser;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "property")
    @JsonManagedReference
    private Set<Tenant> tenants = new HashSet<>();
}
