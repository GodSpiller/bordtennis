package com.esben.bordtennis.bordtennis.user.control;

import com.esben.bordtennis.bordtennis.user.CreateUserRequestDTO;
import com.esben.bordtennis.bordtennis.user.CreateUserResponseDTO;
import com.esben.bordtennis.bordtennis.user.entity.User;
import com.esben.bordtennis.bordtennis.user.mapping.UserMapper;
import com.esben.bordtennis.bordtennis.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    public CreateUserResponseDTO create(CreateUserRequestDTO requestDTO) {
        User user = User.builder()
                .name(requestDTO.getName())
                .email(requestDTO.getEmail())
                .build();
        user = userRepository.save(user);

        return CreateUserResponseDTO.builder().id(user.getId()).build();
    }

}
