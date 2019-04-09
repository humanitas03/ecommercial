package go.Shop.com.User.model;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import go.Shop.com.User.model.Audit.DateAudit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "ecomusers", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
@Setter
@Getter
@AllArgsConstructor
public class User extends DateAudit{
   
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Email
    @Column(nullable = false)
    private String email;

    private String imageUrl;
 
    @Column(nullable = false)
    private Boolean emailVerified = false;

    @JsonIgnore
    private String password;

//    @Column(nullable=true)
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
