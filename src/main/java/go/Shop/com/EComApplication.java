package go.Shop.com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import go.Shop.com.User.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class EComApplication {

	public static void main(String[] args) {
		SpringApplication.run(EComApplication.class, args);
	}

}
