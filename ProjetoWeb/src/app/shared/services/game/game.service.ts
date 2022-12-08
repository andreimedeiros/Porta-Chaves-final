import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../model/game';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  
  URL_GAME = "http://localhost:8080/games"

  constructor(private httpClientGames : HttpClient) { 
    
  }

  listar(): Observable<Game[]> {
      return this.httpClientGames.get<Game[]>(this.URL_GAME)
  } 

  inserir(game: Game): Observable<Game> {
    return this.httpClientGames.post<Game>(this.URL_GAME, game);
  }

}
