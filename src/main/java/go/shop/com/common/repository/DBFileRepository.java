package go.shop.com.common.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import go.shop.com.product.domain.ProductImg;

@Repository
public interface DBFileRepository extends JpaRepository<ProductImg, String> {

}