import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  URL_USER = "http://localhost:8080/users"
  
  constructor(private httpClientUsers: HttpClient) { 
    
  }
  
  
  
  listar(): Observable<User[]> {
    return this.httpClientUsers.get<User[]>(this.URL_USER)
    }
    
  
  inserir(user: User): Observable<User> {
    return this.httpClientUsers.post<User>(this.URL_USER, user)
  }

  removerUser(idremover: string): Observable<object> {
    return this.httpClientUsers.delete(`${this.URL_USER}/${idremover}`);
  }

  pesquisarPorId(id: string): Observable<User> {
    return this.httpClientUsers.get<User>(`${this.URL_USER}/${id}`);
  }

  atualizar(user: User): Observable<User> {
    return this.httpClientUsers.put<User>(`${this.URL_USER}/${user.id}`, user);
  }
 }



  


