package com.esben.bordtennis.bordtennis;

import com.esben.bordtennis.bordtennis.user.boundary.UserResource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@SpringBootApplication
@Import(UserResource.class)
public class BordtennisApplication extends Application {

	public static void main(String[] args) {
		SpringApplication.run(BordtennisApplication.class, args);
	}

}
