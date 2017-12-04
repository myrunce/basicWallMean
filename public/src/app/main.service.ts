import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  addPost(post, callback) {
    return this._http.post(`/api/posts`, post)
    .subscribe(
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  retrievePosts(callback) {
    this._http.get('/api/posts').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOnePost(id, callback) {
    this._http.get('/api/posts/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOneReply(id, callback) {
    this._http.get('/api/replies/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addReply(id, reply, callback) {
    this._http.put('/api/posts/add/' + id, reply)
    .subscribe(
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updatePost(id, post, callback) {
    this._http.put('/api/posts/' + id, post)
    .subscribe (
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateReply(id, reply, callback) {
    this._http.put('/api/replies/' + id, reply)
    .subscribe (
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletePost(id, callback) {
    this._http.delete('/api/posts/' + id).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteReply(id, callback) {
    this._http.delete('/api/replies/' + id).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
