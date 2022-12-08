package com.example.pweb1backend.service;

import com.example.pweb1backend.model.Game;
import com.example.pweb1backend.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;
    public List<Game> listar() {
        return this.gameRepository.findAll();
    }

    public Game getGamebyId(Long gameId) {
        return this.gameRepository.findById(gameId).orElse(null);
    }

    public Game InserirouAtualizarGame(Game game) {
        return this.gameRepository.save(game);
    }

    public void apagarGame(Long idGame) {
        this.gameRepository.deleteById(idGame);
    }
}
