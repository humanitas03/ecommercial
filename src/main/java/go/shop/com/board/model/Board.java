package go.shop.com.board.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import go.shop.com.common.model.audit.DateAudit;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Board")
@Getter
@Setter
public class Board extends DateAudit{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String board_title;

	private String board_userId;
	
	private String board_content;
	
}
