package com.esben.bordtennis.bordtennis.user.boundary;

import com.esben.bordtennis.bordtennis.user.control.UserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(path = "/users")
@Component
public class UserResource {

    @Autowired
    private UserController userController;


}
