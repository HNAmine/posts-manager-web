import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  dns = environment.dns;

  constructor(private _httpClient: HttpClient) { }

  public getPosts(): Observable<any> {
    return this._httpClient.get(this.dns + '/posts');
  }

  public addPost(post: Post): Observable<any> {
    return this._httpClient.post(this.dns + '/posts',  post );
  }

  public updatePost(post: Post): Observable<any> {
    return this._httpClient.put(this.dns + '/posts',  post );
  }
}
