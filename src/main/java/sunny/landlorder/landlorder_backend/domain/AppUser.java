package sunny.landlorder.landlorder_backend.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String username;
    private String password;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "appUser")
    @JsonManagedReference
    private Set<Property> properties = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<UserRole> userRoles = new ArrayList<>();
}
