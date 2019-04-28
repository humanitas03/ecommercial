package go.shop.com.account.config;
/*package go.Shop.com.User.config;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;

import go.Shop.com.User.model.User;
import go.Shop.com.User.model.mail.InEmailConfirmVO;


*//**
 * 이메일 비동기 처리
 * @author 최성준
 * @version 2019.04.10 v1.0
 *//*
@Configuration
@EnableAsync
public class HandlerAsync {
	
	private JavaMailSender mailSender;
	
	*//**
	 * 회원가입 이메일 인증메일 발송
	 * @param inEmailConfirmSendVO
	 * @throws MessagingException 
	 *//*
	@Async
	public void signUpEmailConfirm(InEmailConfirmVO inEmailConfirmSendVO) throws MessagingException {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
		User user = new User();
		
		System.out.println("이메일경로.......");
		messageHelper.setTo(user.getEmail());
		messageHelper.setSubject("회원가입");
        StringBuffer sb = new StringBuffer();
        sb.append("<a href='")
        	.append(inEmailConfirmSendVO.getEmailConfirmUrl())
        	.append("?emailKey=")
        	.append(inEmailConfirmSendVO.getEmailKey())
        	.append("'>이메일인증</a>");
        messageHelper.setText(sb.toString(), true);
        
        mailSender.send(message);
	}
	
}
*/