package com.example.pweb1backend.service;

import com.example.pweb1backend.model.User;
import com.example.pweb1backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> listar() {
        return this.userRepository.findAll();
    }


    public User getUserbyId(Long idUser) {
        return this.userRepository.findById(idUser).orElse(null);
    }

    public User InserirouAtualizarUser(User user) {
        return this.userRepository.save(user);
    }

    public void apagarUsuario(Long idUser) {
        this.userRepository.deleteById(idUser);
    }
}
