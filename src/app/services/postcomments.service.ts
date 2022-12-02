import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostCommentsService {
  private url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient: HttpClient) { }
  getPostcomments(){
    return this.httpClient.get(this.url);
  }
}