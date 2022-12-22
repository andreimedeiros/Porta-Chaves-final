package com.example.pweb1backend.service;


import com.example.pweb1backend.model.Game;
import com.example.pweb1backend.model.Key;
import com.example.pweb1backend.repositories.KeyRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeyService {

    @Autowired
    private KeyRepository keyRepository;




    public List<Key> listarKeys() {
        return this.keyRepository.findAll();
    }

    public Key getKeybyId(Long keyId) {
        return this.keyRepository.findById(keyId).orElse(null);
    }

    public void apagarKey(Long keyId) {
        this.keyRepository.deleteById(keyId);
    }

    public Key InserirouAtualizarKey(Key key) {
        return this.keyRepository.save(key);
    }

    public List<Key> getMB() {
       return this.keyRepository.getId1();
    }

    public List<Key> getCOD() {
        return this.keyRepository.getId2();
    }

    public List<Key> getTW3() {
        return this.keyRepository.getId3();
    }

    public List<Key> getTropico() {
        return this.keyRepository.getId4();
    }

    public List<Key> getsekiro() {
        return this.keyRepository.getId5();
    }

}
