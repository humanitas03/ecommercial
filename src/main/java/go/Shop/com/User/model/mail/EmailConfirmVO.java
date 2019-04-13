package go.Shop.com.User.model.mail;

import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.ForeignKey;

import go.Shop.com.User.model.User;
import go.Shop.com.User.model.Audit.DateAudit;
import io.swagger.annotations.ApiModelProperty;
import lombok.Setter;
import lombok.ToString;
import lombok.Getter;
/**
 * 이메일 인증컬럼
 * @author 최성준
 * @version 2019.04.10 v1.0
 */

@Entity
@Table(name = "user_mailconfirm")
@Getter
@Setter
@ToString
public class EmailConfirmVO extends DateAudit{
		
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		@ApiModelProperty(value="순서")
	    private Long id;
		@ApiModelProperty(value="키값")
		private String emailKey;

		@Column(nullable = false)
		@ApiModelProperty(value="유저ID")
		private String email;
		@ApiModelProperty(value="사용자 타입")
		private String userTypeCode = "NORMAL";
	
		
		
		/**
		 * code : 0 - 사용자 default<br>
		 * code : 1 - 관리자<br>
		 * @return code
		 */
		public int getUserTypeCodeInt() {
			int code = 0;
			if(userTypeCode.equals("User")) {
				code = 0;
			}else if(userTypeCode.equals("Admin")) {
				code = 1;
			}
			return code;
		}
		public void setUserTypeCode(String userTypeCode) {
			this.userTypeCode = userTypeCode;
		}
		/**
		 * code : 0 - 사용자 default<br>
		 * code : 1 - 관리자<br>
		 * @param code
		 */
		public void setUserTypeCode(int code) {
			switch (code) {
			case 0:
				this.userTypeCode = "User";
				break;
			case 1:
				this.userTypeCode = "Admin";
				break;
			}
		}
	
}
