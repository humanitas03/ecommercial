# ecommercial
리액트 구동참고->Front폴더만 열어서 npm start 안될시 npm update 후 npm start  
  
  
Back-End=  
		Java Version : 1.8.0_201  
		Spring boot : 2.1.3.RELEASE  
		Build Automation Tool: Gradle  
Front-End=  
		React.js  
DataBase =  
		Maria DB  
		

# Rule

## Common
> dependency는 모두에게 공유하고 추가한다.  
> project는 monolithic 아키텍처로 진행한다.  
> 브랜치 전략은 추후 논의.  
> Front 공통 메서드의 경우 1.API호출, 2.response 처리 메서드(small-letter 변환. response body 처리 와 같은)를 공유 사용한다.  
> Back 공통 메서드의 경우 1.로그인 사용자 정보조회 2. 코드관리 메서드를 공유 사용한다.  
> 자신이 만든 API에 경우 swagger 혹은 다양한 방식 (현재 미정)을 통해 문서를 만드는데도 신경쓴다.  
  
## Front
> 각자 잘. 알아서. 하는만큼. 열심히.  
  
  
## Back-end

### package
> package 명은 소문자로한다.  
> main 패키지는 go.shop.com 으로 한다.  
> 4번째 패키지 명칭은 기능 / 업무 단위로 묶는다. ex) go.shop.com.product <- 상품API에 관련된 패키지.  
> 기본 패키지 구조는 아래와 같다.  
```
go/shop/com			-- main 패키지
============================================================ controller ~ repository는 하향식 호출.
go/shop/com/product/controller	-- controller 패키지
go/shop/com/product/service	-- service 로직 패키지
go/shop/com/product/mapper	-- jpa기본 CRUD 이외에 인터페이스 정의 패키지(?)
go/shop/com/product/repository	-- jpa 호출 부분 패키지
============================================================
go/shop/com/product/domain	-- db domain 패키지
go/shop/com/product/vo		-- domain 이외에 vo로 사용해야할 패키지.
```

### domain
> 변수선언은 camel-case로 표기한다. ex) private String memberSeq;  
> column에 명칭은 snake-case로 표기한다.	ex) @Column(name="member_seq")  
  
### db
> 모든 명칭은 snake-case가 기본이다.  
> 테이블 명은 접두어 tb_를 붙인다. ex) tb_member  
> 테이블의 기본키는 접두어를 제외한 테이블 명의 _seq로 한다. ex) member_seq  
> 기본키는 BigInteger 에 Autoincrement로 관리한다.  
> name,content,title 과 같은 공통적인 컬럼이라 생각되는 경우 접두어를 제외한 테이블 명을 덧붙인다. ex) member_name  



