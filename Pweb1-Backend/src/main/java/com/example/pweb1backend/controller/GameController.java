package com.example.pweb1backend.controller;

import com.example.pweb1backend.model.Game;
import com.example.pweb1backend.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/games")
    public List<Game> listar() {
        return this.gameService.listar();
    }

    @GetMapping("games/{id}")
    public Game getGamebyId(@PathVariable("id") Long gameId) {
        return this.gameService.getGamebyId(gameId);
    }

    @PostMapping("/games")
    @PutMapping("/games")
    public Game InserirouAtualizarGame(@RequestBody Game game) {
        return this.gameService.InserirouAtualizarGame(game);

    }

    @DeleteMapping("/games/{id}")
    public void apagarGame(@PathVariable("id") Long idGame) {
        this.gameService.apagarGame(idGame);
    }

}
