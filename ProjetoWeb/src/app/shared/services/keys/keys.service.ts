import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../model/game';
import { Key } from '../../model/key';
import { GameService } from '../game/game.service';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class KeysService {

 
  URL_USER = "http://localhost:8080/users"
  URL_GAME = "http://localhost:8080/games"
  URL_KEY = "http://localhost:8080/keys"




  constructor(private httpClientKeys: HttpClient, private gameService: GameService, private userService: UserService) {


  }




  

  listar(): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(this.URL_KEY);
  }

  listarMB(): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(`${this.URL_KEY}/games/keys/1`);
  }

  listarcod(): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(`${this.URL_KEY}/games/keys/2`);
  }

  listartw3(): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(`${this.URL_KEY}/games/keys/3`);
  }

  listartrpc(): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(`${this.URL_KEY}/games/keys/4`);
  }

  listarskr(): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(`${this.URL_KEY}/games/keys/5`);
  }




   inserir(key: Key): Observable<Key> {
    return this.httpClientKeys.post<Key>(this.URL_KEY, key)
  }


  atualizar(key: Key): Observable<Key> {
    return this.httpClientKeys.put<Key>(`${this.URL_KEY}/${key.id}`, key);
  }




  pesquisarPorId(id: string): Observable<Key> {
    return this.httpClientKeys.get<Key>(`${this.URL_KEY}/${id}`);
  }


  removerKey(idremover: string): Observable<object> {
    return this.httpClientKeys.delete(`${this.URL_KEY}/${idremover}`);
  }

}