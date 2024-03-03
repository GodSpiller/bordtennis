package com.esben.bordtennis.bordtennis.user.boundary;

import com.esben.bordtennis.bordtennis.user.CreateUserRequestDTO;
import com.esben.bordtennis.bordtennis.user.control.UserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("users")
@Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
@Consumes(MediaType.APPLICATION_JSON + "; charset=UTF-8")
@Controller
public class UserResource {

    @Autowired
    private UserController userController;

    @POST
    @Path("create")
    public Response create(@RequestBody CreateUserRequestDTO createUserRequestDTO) {
        //userController.create(createUserRequestDTO);
        return Response.accepted().build();
    }

    @GET
    @Path("hello")
    public String greet() {
        return "hej";
    }
}
