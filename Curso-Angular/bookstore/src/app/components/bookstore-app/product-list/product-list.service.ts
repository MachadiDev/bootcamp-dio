import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3100/api/livros';

  httpOption = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

  getBook() {
    return this.http.get(this.url);
  }
}
