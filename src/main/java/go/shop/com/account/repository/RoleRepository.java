package go.shop.com.account.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import go.shop.com.account.model.Role;
import go.shop.com.account.model.UserRole;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

	Optional<Role> findByName(UserRole user);
}
