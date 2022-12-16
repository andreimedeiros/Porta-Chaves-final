import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Key } from '../../model/key';
import { Game } from '../../model/game';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  URL_USER = "http://localhost:8080/users"
  URL_GAME = "http://localhost:8080/games"
  URL_KEY = "http://localhost:8080/games/keys"


  constructor(private httpClientKeys: HttpClient ) {

   }


   

   listar(id: string): Observable<Key[]> {
    return this.httpClientKeys.get<Key[]>(`${this.URL_GAME}/${id}/keys`);
   }


   inserir(id: string, codigo: string, preco: Number): Observable<Key> {
    const key = {"codigo": codigo, "preco": preco}
    // const keyjson = JSON.stringify(key)
    return this.httpClientKeys.post<Key>(`${this.URL_KEY}/${id}`, key)
   }

  //  inserir(key: Key): Observable<Key> {
  //   return this.httpClientKeys.post<Key>(this.URL_KEY, key)
  // }



  atualizar(id: string,  codigo: string, preco: Number): Observable<Key> {
    const key = {
      codigo: codigo,
      preco: preco
    };
    JSON.stringify(key);

    return this.httpClientKeys.put<Key>(`${this.URL_GAME}/${id}?keys=`, key);

    
  }


  // atualizar(key: Key): Observable<Key> {
  //   return this.httpClientKeys.put<Key>(`${this.URL_KEY}/${key.id}`, key);
  // }

  remover(id: string): Observable<Key>{
    return this.httpClientKeys.delete(`${this.URL_KEY}/${id}`);
  }

  removerKey(idremover: string): Observable<object> {
    return this.httpClientKeys.delete(`${this.URL_KEY}/${idremover}`);
  }

}