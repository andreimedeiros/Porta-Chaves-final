import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/shared/model/game';
import { GameFirestoreService } from 'src/app/shared/services/firestore/game/game-firestore.service';
import { GameService } from 'src/app/shared/services/game/game.service';

@Component({
  selector: 'app-listagem-game',
  templateUrl: './listagem-game.component.html',
  styleUrls: ['./listagem-game.component.scss']
})
export class ListagemGameComponent implements OnInit {

  games: Game[] ;

  constructor(private gameService: GameService, private roteador: Router) {
    this.games = new Array<Game>;
  }
  
  ngOnInit(): void {
    this.gameService.listar().subscribe(
      jogosobs => this.games = jogosobs
    );
  }




}
