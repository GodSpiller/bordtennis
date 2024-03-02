package com.esben.bordtennis.bordtennis.user.repository;

import com.esben.bordtennis.bordtennis.user.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {

}
