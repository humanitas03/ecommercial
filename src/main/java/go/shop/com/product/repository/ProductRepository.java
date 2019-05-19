package go.shop.com.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import go.shop.com.product.domain.Product;

@Repository  
public interface ProductRepository extends JpaRepository<Product, Long> {

}
