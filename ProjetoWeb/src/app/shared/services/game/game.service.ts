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

  remover(codigoremover: string): Observable<object> {
    return this.httpClientGames.delete(`${this.URL_GAME}/${codigoremover}`);
  }

  pesquisarPorCodigo(codigo: string): Observable<Game> {
    return this.httpClientGames.get<Game>(`${this.URL_GAME}/${codigo}`);
  }

  buscarGame(game:string): Observable<Game[]> {
    const gamenome = game.toLowerCase()
    return this.httpClientGames.get<Game[]>(`${this.URL_GAME}?nome=${gamenome}`);

  }


  atualizar(game: Game): Observable<Game> {
    return this.httpClientGames
      .put<Game>(`${this.URL_GAME}/${game.codigo}`, game);
  }

}
