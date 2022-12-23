package com.example.pweb1backend.repositories;

import com.example.pweb1backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {


}
