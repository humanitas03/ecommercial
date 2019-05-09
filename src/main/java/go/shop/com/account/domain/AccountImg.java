package go.shop.com.account.domain;

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
@Table(name="tb_account_img")
@Data
@AllArgsConstructor
public class AccountImg {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="account_img_seq")
	private Long accountImgSeq;
	 
	@OneToOne
	@JoinColumn(name = "account_seq", referencedColumnName = "account_seq")
	private Account account;
	
	@Column(name="account_img_url")
	private String origImgUrl;

	@Column(nullable = false, name = "account_img_path")
	private String path;

	@Column(nullable = false, name = "account_img_original_filename")
	private String originalFileName;

	@Column(nullable = false, name = "account_img_stored_filename")
	private String storedFileName;

	@Column(nullable = false, name = "account_img_size")
	private Long size;

	@Column(nullable = false, name = "account_img_filetype")
	private String fileType;

	

	public AccountImg() {
		// TODO Auto-generated constructor stub
	}


}
