package go.shop.com.productDetail.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="tb_bike_detail")
@Getter
@Setter
@NoArgsConstructor 
@AllArgsConstructor 
public class ProductDetail {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bike_detail_seq")
	private Long bikeDetailSeq;
	
	@Column(name="bike_seq")
	private Long bikeSeq;
	
	@Column(name="bike_detail_distance")
	private String bikeDetailDistance;
	
	@Column(name="bike_detail_publish")
	private String bikeDetailPublish;
	
	@Column(name="bike_detail_tuning_yn")
	private boolean bikeDetailTuningYn;
	
	@Column(name="bike_detail_used_yn")
	private boolean bikeDetailUsedYn;
	
	@Column(name="bike_detail_doc_yn")
	private boolean bikeDetailDocYn;
	
	@Column(name="bike_detail_color")
	private String bikeDetailColor;

	@Column(name="bike_detail_user_price")
	private String bikeDetailUserPrice;
	
	@Column(name="bike_detail_region")
	private String bikeDetailRegion;
	
	@Column(name="bike_detail_accident_yn")
	private boolean bikeDetailAccidentYn;
	
	
}
