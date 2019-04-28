package go.shop.com.account.model;

import java.time.Instant;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

import go.shop.com.common.model.audit.DateAudit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
* 유저기록 테이블
* @author 최성준
* @version 2019.04.10 v1.0
*/
@Entity
@Table(name = "user_history")
@Setter
@Getter
@AllArgsConstructor 
public class UserHistory extends DateAudit{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String ip;
	
	private String email;
	
	private String url;
	
	private String actionCode;
	
	private String description;
	
	public UserHistory() {
	}

}
