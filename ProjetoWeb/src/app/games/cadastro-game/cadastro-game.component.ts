import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/model/game';
import { GameFirestoreService } from 'src/app/shared/services/firestore/game/game-firestore.service';
import { GameService } from 'src/app/shared/services/game/game.service';


@Component({
  selector: 'app-cadastro-game',
  templateUrl: './cadastro-game.component.html',
  styleUrls: ['./cadastro-game.component.scss']
})
export class CadastroGameComponent implements OnInit {

  game: Game;
  // games: Array<Game>;

  constructor(private gameService: GameService) { 
    this.game = new Game('','','');
    // this.games = gameService.listar();
  }

  

  ngOnInit(): void {
  }


  adicionarGame(): void {
    this.gameService.inserir(this.game).subscribe(
      jogoobs => console.log(jogoobs)
    )
    this.game = new Game('','','');

  }
}
