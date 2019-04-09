package go.Shop.com.User.model;

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

import go.Shop.com.User.model.Audit.DateAudit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

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
