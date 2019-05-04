package go.shop.com.product.domain;

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
@Table(name="tb_bike_orig_img")
@Getter
@Setter
public class ProductOrigImg {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="orig_img_seq")
	private Long origImgSeq;
	
//	@Column(name="bike_seq")
//	private Long bikeSeq;
	
	@OneToOne
	@JoinColumn(name = "bike_seq", referencedColumnName = "bike_seq")
	private Product product;
	
	@Column(name="orig_img_url")
	private String origImgUrl;

}
