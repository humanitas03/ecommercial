package go.shop.com.account.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
* 유저 타입 테이블
* @author 최성준
* @version 2019.04.10 v1.0
*/
@Entity
@Table(name = "user_roles")
@Data
public class Role {
 
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(length = 60)
    private UserRole name;

    public Role() {
	}
 
}
