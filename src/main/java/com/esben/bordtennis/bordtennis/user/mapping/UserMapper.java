package com.esben.bordtennis.bordtennis.user.mapping;

import com.esben.bordtennis.bordtennis.user.CreateUserResponseDTO;
import com.esben.bordtennis.bordtennis.user.entity.User;

public class UserMapper {

    public CreateUserResponseDTO mapToCreateUserResponseDTO(User user) {
        return CreateUserResponseDTO.builder()
                .id(user.getId())
                .build();
    }
}
