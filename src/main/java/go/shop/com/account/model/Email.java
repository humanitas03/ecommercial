package go.shop.com.account.model;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
* SMTP Vo
* @author 최성준
* @version 2019.04.10 v1.0
*/
@Getter
@Setter 
@ToString
@Component
public class Email {
 
	private String subject;
    private String content;
    private String receiver;
}
