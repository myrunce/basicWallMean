import { Reply } from './../reply';
import { MainService } from './../main.service';
import { Post } from './../post';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MaterializeAction } from 'angular2-materialize';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  post: Post = new Post();
  posts;
  id;
  modalActions = new EventEmitter<string|MaterializeAction>();
  reply: Reply = new Reply();
  postIds = [];

  constructor(private _mainService: MainService, private _flashMessagesService: FlashMessagesService) {

  }

  ngOnInit() {
    this._mainService.retrievePosts((posts) => {
      this.posts = posts;
    });
  }

  onSubmit() {
    console.log('hello');
    this._flashMessagesService.show('Post added sucessfully!', { timeout: 1000 });
    this._mainService.addPost(this.post, (post) => {
      this._mainService.retrievePosts((posts) => {
        this.posts = posts;
      });
    });
    this.post = new Post();
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  delete(id) {
    this._mainService.deletePost(id, (posts) => {
      this.posts = posts;
      this.closeModal();
      this._flashMessagesService.show('Post deleted sucessfully!', { timeout: 1000 });
    });
  }

  like(id) {
    this._mainService.getOnePost(id, (post) => {
      this.post = post;
      this.post.likes++;
      this._mainService.updatePost(id, this.post, (posted) => {
        console.log('liked');
      });
      this._mainService.retrievePosts((posts) => {
        this.posts = posts;
      });
      this.post = new Post();
    });
  }

  toPost() {
    $('html,body').animate({
      scrollTop: $('#addPost').offset().top},
      'slow');
  }

  addReply(id) {
    this._mainService.addReply(id, this.reply, (posts) => {
      this.posts = posts;
      this.reply = new Reply();
      this.closeModal();
    });
  }

  slide(id) {
    $('#replies' + id).toggle();
    console.log($('#icon' + id).html());
    if ($('#icon' + id).html() === 'arrow_upward') {
      $('#slide' + id).html(`<i id="icon${id}" class="material-icons right">arrow_downward</i>Show Replies`);
    } else {
      console.log('in else');
      $('#slide' + id).html(`<i id="icon${id}" class="material-icons right">arrow_upward</i>Hide Replies`);
    }
  }

  deleteReply(id) {
    this._mainService.deleteReply(id, (posts) => {
      this.posts = posts;
      this.closeModal();
      this._flashMessagesService.show('Reply deleted sucessfully!', { timeout: 1000 });
    });
  }
}
