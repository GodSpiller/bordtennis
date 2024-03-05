package com.esben.bordtennis.bordtennis.user.boundary;

import com.esben.bordtennis.bordtennis.user.CreateUserRequestDTO;
import com.esben.bordtennis.bordtennis.user.control.UserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
@Consumes(MediaType.APPLICATION_JSON + "; charset=UTF-8")
@RequestMapping("users")
@RestController
public class UserResource {

    @Autowired
    private UserController userController;

    @PostMapping("create")
    @CrossOrigin
    public HttpStatus create(@RequestBody CreateUserRequestDTO createUserRequestDTO) {
        userController.create(createUserRequestDTO);
        return HttpStatus.ACCEPTED;
    }

    @GetMapping("/hello")
    public String greet() {
        return "hej";
    }

}
