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
  
}

