import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/7a69d9ee-e095-43aa-b1db-815d638354f9';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //RETORNA A LISTA DE USUÁRIOS (READ)
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Salva Usuário no banco (CREATE)
  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);

  }

  //Exclui usuário do banco (DELETE)
  deleteUser(id: number):Observable<User> { 
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  //Editar usuários (UPDATE)
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  //Lista unico usuario por ID
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }
}
