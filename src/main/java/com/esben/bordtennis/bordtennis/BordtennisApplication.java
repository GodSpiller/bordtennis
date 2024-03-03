package com.esben.bordtennis.bordtennis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@SpringBootApplication
public class BordtennisApplication extends Application {

	public static void main(String[] args) {
		SpringApplication.run(BordtennisApplication.class, args);
	}

}
