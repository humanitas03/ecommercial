package go.Shop.com;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import go.Shop.com.User.config.AppProperties;

@SpringBootApplication
@EntityScan(basePackageClasses= {
		EComApplication.class,
		Jsr310JpaConverters.class 
})
@EnableConfigurationProperties(AppProperties.class)
public class EComApplication {

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
	public static void main(String[] args) {
		SpringApplication.run(EComApplication.class, args);
	}

}
