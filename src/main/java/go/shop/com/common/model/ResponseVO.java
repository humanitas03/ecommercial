package go.shop.com.common.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 응답 도메인
 * @author 최성준
 * @version 2019.04.10 v1.0
 */
@Getter
@Setter
@ToString
public class ResponseVO<T> {

	@ApiModelProperty(value="코드")
	private int code = 200;
	@ApiModelProperty(value="메세지")
	private String message;
	@ApiModelProperty(value="성공여부")
	private boolean check = true;
	@ApiModelProperty(value="json 데이터")
	private T response;
}
