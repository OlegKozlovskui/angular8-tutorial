import { Component, EventEmitter, Output } from '@angular/core';

import Post from '../shared/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();
  title: string;
  text: string;

  addPost() {
    const post: Post = {
      id: 10,
      title: this.title,
      text: this.text
    };

    this.onAddPost.emit(post);
  }

}
