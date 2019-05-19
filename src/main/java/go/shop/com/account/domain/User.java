package go.shop.com.account.domain;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import go.shop.com.common.model.audit.DateAudit;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
* 유저테이블
* @author 최성준
* @version 2019.04.10 v1.0
*/
@Entity
@Table(name = "ecomusers", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
@Data
public class User extends DateAudit{
   
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(value="순서")
    private Long id;

    @Column(nullable = false)
    @ApiModelProperty(value="이름")
    private String name;

    @Email
    @Column(nullable = false)
    @ApiModelProperty(value="유저id")
    private String email;

    @ApiModelProperty(value="유저이미지")
    private String imageUrl;
 
    @Column(nullable = false)
    private Boolean emailVerified = false;

    @ApiModelProperty(value="사용자 상태")
	private String statusCode = "EMAIL_CONFIRM";
    
    
    @JsonIgnore
    private String password;

    @Column(nullable=true)
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "role_connect",
    joinColumns = @JoinColumn(name = "ecomusers_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();
     
    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;

	
	public User() {
		
	}
 
    
}
