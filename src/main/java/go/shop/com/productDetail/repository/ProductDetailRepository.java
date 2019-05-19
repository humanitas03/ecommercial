package go.shop.com.productDetail.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import go.shop.com.productDetail.domain.ProductDetail;

@Repository
public interface ProductDetailRepository extends JpaRepository<ProductDetail, Long>{

}
