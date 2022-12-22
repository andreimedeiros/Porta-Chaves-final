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


    @RequestMapping("keys/games/keys/1")
    public List<Key> listarMB() {
        return this.keyService.getMB();
    }

    @RequestMapping("keys/games/keys/2")
    public List<Key> listarCOD() {
        return this.keyService.getCOD();
    }


    @RequestMapping("keys/games/keys/3")
    public List<Key> listarTW3() {
        return this.keyService.getTW3();
    }

    @RequestMapping("keys/games/keys/4")
    public List<Key> listarTropico() {
        return this.keyService.getTropico();
    }

    @RequestMapping("keys/games/keys/5")
    public List<Key> listarSekiro() {
        return this.keyService.getsekiro();
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
