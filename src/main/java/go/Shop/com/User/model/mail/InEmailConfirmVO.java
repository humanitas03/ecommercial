package go.Shop.com.User.model.mail;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@Table(name="user_mailaddress")
public class InEmailConfirmVO extends EmailConfirmVO{

	@ApiModelProperty(value="이메일")
	private String email;
	@ApiModelProperty(value="이메일인증 URL")
	private String emailConfirmUrl;
}
