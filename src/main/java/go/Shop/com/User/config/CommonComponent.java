package go.Shop.com.User.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.mail.javamail.JavaMailSender;

import lombok.Getter;

@Getter
public class CommonComponent {
	@Autowired
	private HandlerAsync async;

	@Autowired
	private MessageSource msg;
	
	private JavaMailSender mailSender;
	
}
