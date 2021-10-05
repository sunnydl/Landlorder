package sunny.landlorder.landlorder_backend.service;

import sunny.landlorder.landlorder_backend.domain.AppUser;
import sunny.landlorder.landlorder_backend.domain.UserRole;

import java.util.List;

public interface AppUserService {
    AppUser saveUser(AppUser appUser);
    UserRole saveRole(UserRole userRole);
    void addRoleToUser(String username, String roleName);
    AppUser getUser(String username);
    List<AppUser> getAllUsers();
}
