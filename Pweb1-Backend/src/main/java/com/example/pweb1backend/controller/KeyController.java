package com.example.pweb1backend.controller;


import com.example.pweb1backend.model.Key;
import com.example.pweb1backend.service.GameService;
import com.example.pweb1backend.service.KeyService;
import com.example.pweb1backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class KeyController {

    @Autowired
    private KeyService keyService;


    @RequestMapping("/keys")
    public List<Key> listar() {
        return this.keyService.listarKeys();
    }

    @RequestMapping("/keys/{id}")
    public Key getKeybyId(@PathVariable("id")Long idKey) {
        return this.keyService.getKeybyId(idKey);
    }


    @PostMapping("/keys")
    public Key InserirKey(@RequestBody Key key) {
        return this.keyService.InserirouAtualizarKey(key);

    }


    @PutMapping("/keys/{id}")
    public Key AtualizarKey(@RequestBody Key key) {
        return this.keyService.InserirouAtualizarKey(key);
    }


    @DeleteMapping("/keys/{id}")
    public void apagarKey(@PathVariable("id") Long idKey) {
        this.keyService.apagarKey(idKey);
    }








}
