import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../model/game';
import { Key } from '../../model/key';
import { KeyEnvio } from '../../model/keyenvio';
import { GameService } from '../game/game.service';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class KeysService {

 
  URL_USER = "http://localhost:8080/users"
  URL_GAME = "http://localhost:8080/games"
  URL_KEY = "http://localhost:8080/keys"

  keyenvio: KeyEnvio;


  constructor(private httpClientKeys: HttpClient, private gameService: GameService, private userService: UserService) {
    this.keyenvio = new KeyEnvio();

  }




  //  listar(id: string): Observable<Key[]> {
  //   return this.httpClientKeys.get<Key[]>(`${this.URL_GAME}/${id}/keys`);
  //  }

  listar(id: string): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(this.URL_KEY);
  }



  // inserirKey(codigo: string, preco: Number, user_id: string, game_id: string): Observable<Key> {
  //   const key =
  //   {
  //     "codigo": codigo,
  //     "preco": preco,
  //     "user": user_id,
  //     "game": game_id,

  //   }

  //   JSON.stringify(key);
  //   return this.httpClientKeys.post<Key>(this.URL_KEY, key)
  // }


   inserir(key: Key): Observable<KeyEnvio> {
    let gameid = key.game_id;
    let userid = key.user_id;



    const game: any = this.gameService.pesquisarPorCodigo(gameid); 
    const user: any = this.userService.pesquisarPorId(userid);

    this.keyenvio.codigo = key.codigo;
    this.keyenvio.preco = key.preco;
    this.keyenvio.game = game;
    this.keyenvio.user = user;

    return this.httpClientKeys.post<KeyEnvio>(this.URL_KEY, this.keyenvio)
  }



  // atualizar(id: string,  codigo: string, preco: Number): Observable<Key> {
  //   const key = {
  //     codigo: codigo,
  //     preco: preco
  //   };
  //   JSON.stringify(key);

  //   return this.httpClientKeys.put<Key>(`${this.URL_GAME}/${id}?keys=`, key);
  // }


  atualizar(key: Key): Observable<Key> {
    return this.httpClientKeys.put<Key>(`${this.URL_KEY}/${key.id}`, key);
  }


  // remover(id: string): Observable<Key>{
  //   return this.httpClientKeys.delete(`${this.URL_KEY}/${id}`);
  // }



  pesquisarPorId(id: string): Observable<Key> {
    return this.httpClientKeys.get<Key>(`${this.URL_KEY}/${id}`);
  }


  removerKey(idremover: string): Observable<object> {
    return this.httpClientKeys.delete(`${this.URL_KEY}/${idremover}`);
  }

}