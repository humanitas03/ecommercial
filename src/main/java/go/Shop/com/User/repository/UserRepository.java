package go.Shop.com.User.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import go.Shop.com.User.model.User;
import go.Shop.com.User.model.UserHistory;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

	UserHistory save(UserHistory uh);

}
