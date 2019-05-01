package go.shop.com.account.controller;

import java.net.URI;
import java.util.Collections;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import go.shop.com.account.config.BuildDescription;
import go.shop.com.account.config.EmailSender;
import go.shop.com.account.exception.AppException;
import go.shop.com.account.exception.BadRequestException;
import go.shop.com.account.model.ActionCode;
import go.shop.com.account.model.AuthProvider;
import go.shop.com.account.model.Description;
import go.shop.com.account.model.Email;
import go.shop.com.account.model.Role;
import go.shop.com.account.model.User;
import go.shop.com.account.model.UserHistory;
import go.shop.com.account.model.UserRole;
import go.shop.com.account.model.mail.EmailConfirmVO;
import go.shop.com.account.payload.ApiResponse;
import go.shop.com.account.payload.AuthResponse;
import go.shop.com.account.payload.LoginRequest;
import go.shop.com.account.payload.SignUpRequest;
import go.shop.com.account.repository.RoleRepository;
import go.shop.com.account.repository.UserRepository;
import go.shop.com.account.security.TokenProvider;
import go.shop.com.account.util.TempKey;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;
    
    @Autowired
    RoleRepository roleRepository;
    
//	@Autowired
//	private EmailSender emailSender;

//	@Autowired
//	private Email email;
    /**
	 * 사용자 로그인
	 * @param locale
	 * @param emailConfirmVO
	 * @return
	 * @throws Exception
	 */
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        /*ip주소 가져오는 객체정보 정확하진 않음*/
        HttpServletRequest req = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();

        BuildDescription builddesc;
        /*시큐리티에서 관리하는 세션정보?*/
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = new User();
        /*회원히스토리 기록*/
        UserHistory uh=new UserHistory();
        uh.setIp(req.getRemoteAddr());
        uh.setEmail(authentication.getName());
        uh.setUrl(req.getRequestURI());
        uh.setDescription(BuildDescription.get(Description.LOGIN,authentication.getName()));
        uh.setActionCode(ActionCode.LOGIN);
        userRepository.save(uh);
        
        String token = tokenProvider.createToken(authentication);
        return ResponseEntity.ok(new AuthResponse(token));
    }
    /**
	 * 사용자 회원가입
	 * @param locale
	 * @param emailConfirmVO
	 * @return
	 * @throws Exception
	 */
    @PostMapping("/signup")
    @Transactional(propagation=Propagation.REQUIRED, readOnly=false, rollbackForClassName="Exception")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest
    		) throws MessagingException {
        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }
//        Role userRole = roleRepository.findByName(UserRole.User)
//                .orElseThrow(() -> new AppException("User Role not set."));
        // Creating user's account
        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setProvider(AuthProvider.local);
        
        //security Role 구분
        Role userRole = roleRepository.findByName(UserRole.User)
                .orElseThrow(() -> new AppException("User Role not set."));
        
        user.setRoles(Collections.singleton(userRole));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedAt(user.getCreatedAt());
//    
//        // 사용자 이메일 인증 정보처리
 		TempKey tempKey = new TempKey();
 		String key = tempKey.getKey(50);
 		EmailConfirmVO emailConfirmVO = new EmailConfirmVO();
 		emailConfirmVO.setEmail(user.getEmail());
 		emailConfirmVO.setUserTypeCode(user.getStatusCode());
 		emailConfirmVO.setEmailKey(key);
        
// 		System.out.println("==================");
// 		System.out.println(emailConfirmVO);
// 		System.out.println("==================");
        User result = userRepository.save(user);
        userRepository.save(emailConfirmVO);
//        CommonComponent common=new CommonComponent();
//        
//		inEmailConfirmSendVO.setEmail(user.getEmail());
//		inEmailConfirmSendVO.setEmailKey(key);
//		inEmailConfirmSendVO.setEmailConfirmUrl(user.getEmail());
		

        /*이메일 보내는 기능 막음 
         * 2019-04-15 최성준*/
//		email.setContent("회원가입을 축하드립 니다.");
//		email.setReceiver(user.getEmail());
//		email.setSubject(user.getEmail()+"님 회원가입메일입니다.");
//
//			try {
//				emailSender.SendEmail(user);
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
		
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(result.getId()).toUri();
        
        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "User registered successfully@"));
    }
    
}
