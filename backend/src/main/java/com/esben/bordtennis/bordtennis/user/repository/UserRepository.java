package com.esben.bordtennis.bordtennis.user.repository;

import com.esben.bordtennis.bordtennis.BaseRepository;
import com.esben.bordtennis.bordtennis.user.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends BaseRepository<User, Long> {

}
