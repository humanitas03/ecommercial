package go.shop.com.product.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import go.shop.com.productDetail.domain.ProductDetail;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Table(name="tb_bike_img")
@Data
@AllArgsConstructor
public class ProductImg {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bike_detail_img_seq")
	private Long bikeDetailImgSeq;
	 
//	@Column(name="bike_seq")
//	private Long bikeSeq;
	
	@OneToOne
	@JoinColumn(name = "bike_detail_seq", referencedColumnName = "bike_detail_seq")
	private ProductDetail productDetail;
	
	@Column(name="bike_img_url")
	private String origImgUrl;
	// 1이면 메인이미지, 2는 서브이미지, 3은 하단 상세이미지
	@Column(name="bike_img_category")
	private Long category;
	@Column(nullable = false, name = "bike_img_path")
	private String path;

	@Column(nullable = false, name = "bike_img_original_filename")
	private String originalFileName;

	@Column(nullable = false, name = "bike_img_stored_filename")
	private String storedFileName;

	@Column(nullable = false, name = "bike_img_size")
	private Long size;

	@Column(nullable = false, name = "bike_img_filetype")
	private String fileType;

	

	public ProductImg() {
		// TODO Auto-generated constructor stub
	}


}
