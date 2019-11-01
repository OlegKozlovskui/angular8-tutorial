import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

import Post from '../shared/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @ContentChild('info', { static: true }) infoRef: ElementRef;

  ngOnInit() {
    console.log('th', this.infoRef);
  }

}
