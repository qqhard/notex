package org.crazy;

import org.crazy.sevice.ElasticSearchService;
import org.crazy.sevice.SearchService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NotexApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotexApplication.class, args);
	}
	
	@Bean
	public SearchService searchService(){
		return new ElasticSearchService();
	}
}
