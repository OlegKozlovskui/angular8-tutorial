import { Component, OnInit } from '@angular/core';

import Post from '../shared/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [
    {
      id: 1,
      title: 'Angular',
      text: 'Javascript framework'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }
}
