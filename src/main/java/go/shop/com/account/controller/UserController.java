package go.shop.com.account.controller;

import java.awt.print.Book;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import go.shop.com.account.exception.ResourceNotFoundException;
import go.shop.com.account.model.User;
import go.shop.com.account.repository.UserRepository;
import go.shop.com.account.security.CurrentUser;
import go.shop.com.account.security.UserPrincipal;
import go.shop.com.product.domain.Product;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
    
    @CrossOrigin
    @PostMapping("/updateUser")
    public ResponseEntity<User> updateBook() {
    	System.out.println("회원업데이트연동");
    	return null;
    }
    
    
 
}
