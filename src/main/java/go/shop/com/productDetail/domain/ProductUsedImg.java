package go.shop.com.productDetail.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tb_bike_used_img")
@Getter
@Setter
public class ProductUsedImg {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="used_img_seq")
	private Long usedImgSeq;
	
//	@Column(name="bike_detail_seq")
//	private Long bikeDetailSeq;
	
	@OneToOne
	@JoinColumn(name = "bike_detail_seq", referencedColumnName = "bike_detail_seq")
	private ProductDetail productDetail;
	@Column(name="bike_used_img_url")
	private String bikeUsedImgUrl;
}

