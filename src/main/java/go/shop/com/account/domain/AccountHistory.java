package go.shop.com.account.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tb_account_history")
@Getter
@Setter
public class AccountHistory {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="account_hist_seq")
	private Long accountHistSeq;
	
	@Column(name="account_seq")
	private Long accountSeq;
	
	@Column(name="account_url")
	private String accountUrl;
	
	@Column(name="account_action_code")
	private String accountActionCode;
	
	@Column(name="account_description")
	private String accountDescription;
	
}
