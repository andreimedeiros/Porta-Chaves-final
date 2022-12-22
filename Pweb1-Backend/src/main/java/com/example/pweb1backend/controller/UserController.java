package com.example.pweb1backend.controller;

import com.example.pweb1backend.model.User;
import com.example.pweb1backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/users")
    public List<User> listar() {
        return this.userService.listar();
    }


    @GetMapping("/users/{id}")
    public User getUserbyId(@PathVariable("id") Long idUser) {
        return this.userService.getUserbyId(idUser);

    }


    @PostMapping("/users")
    public User InserirUser(@RequestBody User user){
        return this.userService.InserirouAtualizarUser(user);
    }

    @PutMapping("/users/{id}")
    public User AtualizarUser(@RequestBody User user){
        return this.userService.InserirouAtualizarUser(user);
    }


    @DeleteMapping("/users/{id}")
    public void apagarUsuario(@PathVariable("id") Long idUser) {
        this.userService.apagarUsuario(idUser);
    }


}
