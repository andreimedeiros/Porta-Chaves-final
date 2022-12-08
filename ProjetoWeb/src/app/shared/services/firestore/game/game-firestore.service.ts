import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { Game } from 'src/app/shared/model/game';

@Injectable({
  providedIn: 'root'
})
export class GameFirestoreService {

  colecaoGames: AngularFirestoreCollection<Game>;
  NOME_GAMES = "games";

  constructor(private afsgames: AngularFirestore) {
    this.colecaoGames = afsgames.collection(this.NOME_GAMES)
  }

  listar(): Observable<Game[]> {
    return this.colecaoGames.valueChanges({ IdField: 'codigo' });
  };

  inserir(game: Game): Observable<object> {
    return from(this.colecaoGames.add(Object.assign({...game})))
  }

}

