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

/**
* @author 최성
* @version 2019.05.05 v1.0
* @Describe=>Bike Engine Information Entity
* 엔진타입,보어,스트로크,배기량,압축비,연료시스템,배기 
*/

@Entity
@Table(name="tb_bike_info_engine")
@Data
public class BikeInfoEngine {

	@Id
	@Column(name = "bikeinfoengine_seq")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bikeInfoEngineSeq;
	
	@Column(name="bikeinfo_engine")
	private String Engine;
	@Column(name="bikeinfo_bore")
	private String Bore;
	@Column(name="bikeinfo_stroke")
	private String Stroke;
	@Column(name="bikeinfo_displacement")
	private String Displacement;
	@Column(name="bikeinfo_compressionratio")
	private String CompressionRatio;
	@Column(name="bikeinfo_fuelsystem")
	private String FuelSystem;
	@Column(name="bikeinfo_exhaust")
	private String Exhaust;
	@Column(name="bikeinfo_transmission")
	private String Transmission;
	
	
	@OneToOne
	@JoinColumn(name = "bike_seq")
	private Product product;
	


	
}
