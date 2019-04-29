package go.shop.com.product.domain;

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
@Table(name="tb_bike")
@Getter
@Setter
@NoArgsConstructor 
@AllArgsConstructor 
public class Product {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bike_seq")
	private Long bikeSeq;
	
	@Column(name="bike_name")
	private String bikeName;
	
	@Column(name="bike_cc")
	private String bikeCc;
	
	@Column(name="bike_orig_price")
	private String bikeOrigPrice;
	
	@Column(name="bike_brand")
	private String bikeBrand;
	
	@Column(name="bike_ctry")
	private String bikeCtry;
	
	@Column(name="bike_kind")
	private String bikeKind;

}
