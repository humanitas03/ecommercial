package go.shop.com.account.config;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import go.shop.com.account.model.Email;
import go.shop.com.account.model.User;

@Component
public class EmailSender {

	  @Autowired
	    private JavaMailSender mailSender;
	 
	     
	    public void SendEmail(User user) throws Exception {
	    	
	    	
	    	MimeMessage msg = mailSender.createMimeMessage();//에러지점
	        try {
	             
	            msg.setSubject(user.getEmail()+"님 회원가입을 축하드립니다");
	            msg.setText("테스트!!!!!!!!!!");
	            msg.setRecipients(MimeMessage.RecipientType.TO , InternetAddress.parse(user.getEmail()));
	            mailSender.send(msg);
	        }catch(MessagingException e) {
	            System.out.println("MessagingException");
	            e.printStackTrace();
	        }
	    }


}
