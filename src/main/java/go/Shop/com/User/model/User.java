package go.Shop.com.User.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ecomusers", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
@Setter
@Getter
public class User {
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

    @Column(nullable=true)
    @Enumerated(EnumType.STRING)
    private UserRole role;
    
    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;
   
    @Column(nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date regdate=new Date();

    
}
