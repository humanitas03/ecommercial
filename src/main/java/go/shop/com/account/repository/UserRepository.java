package go.shop.com.account.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import go.shop.com.account.model.User;
import go.shop.com.account.model.UserHistory;
import go.shop.com.account.model.mail.EmailConfirmVO;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	/**
	 * 아이디 찾기 --최성준
	 * @param emailConfirmVO
	 * @return
	 */
    Optional<User> findByEmail(String email);

    /**
	 * 아이디 중복 체크 --최성준
	 * @param emailConfirmVO
	 * @return
	 */
    Boolean existsByEmail(String email);

    /**
	 * 회원 로그 --최성준
	 * @param emailConfirmVO
	 * @return
	 */
	UserHistory save(UserHistory uh);
	/**
	 * 이메일 검증 --최성준
	 * @param emailConfirmVO
	 * @return
	 */
	EmailConfirmVO save(EmailConfirmVO inEmailConfirmSendVO);

	
}
