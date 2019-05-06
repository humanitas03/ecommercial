package go.shop.com.product.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tb_bike_img")
@Data
public class ProductImg {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bike_img_seq")
	private Long origImgSeq;
	 
//	@Column(name="bike_seq")
//	private Long bikeSeq;
	
	@OneToOne
	@JoinColumn(name = "bike_seq", referencedColumnName = "bike_seq")
	private Product product;
	
	@Column(name="bike_img_url")
	private String origImgUrl;
	// 1이면 메인이미지, 2는 서브이미지, 3은 하단 상세이미지
	@Column(name="bike_img_category")
	private Long category;
	@Column(nullable = false, name = "bike_img_path")
	private String path;

	@Column(nullable = false, name = "bike_img_originalfilename")
	private String originalFileName;

	@Column(nullable = false, name = "bike_img_storedfilename")
	private String storedFileName;

	@Column(nullable = false, name = "bike_img_size")
	private Long size;

	@Column(nullable = false, name = "bike_img_filetype")
	private String fileType;

	public ProductImg(Long origImgSeq, Product product, String origImgUrl, Long category, String path,
			String originalFileName, String storedFileName, Long size, String fileType) {
		super();
		this.origImgSeq = origImgSeq;
		this.product = product;
		this.origImgUrl = origImgUrl;
		this.category = category;
		this.path = path;
		this.originalFileName = originalFileName;
		this.storedFileName = storedFileName;
		this.size = size;
		this.fileType = fileType;
	}

	public ProductImg() {
		// TODO Auto-generated constructor stub
	}


}
