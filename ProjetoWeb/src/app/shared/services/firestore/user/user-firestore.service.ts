import { ListKeyManager } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import User from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserFirestoreService {

  colecaoUsers: AngularFirestoreCollection<User>;
  NOME_USERS = 'users';

  constructor(private afsusers: AngularFirestore) { 
    this.colecaoUsers = afsusers.collection(this.NOME_USERS);
  }

listar(): Observable<User[]> {
  return this.colecaoUsers.valueChanges({IdField: 'id'}); 

}
inserir(user: User): Observable<object> {
  return from(this.colecaoUsers.add(Object.assign({...user})))
}

}

