import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  post: Post;
  private domain = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.domain + '/posts').map(res => res.json());
  }

  getPost(id: string) {
    return this.http.get(this.domain + '/post/' + id).map(res => res.json());
  }
}
