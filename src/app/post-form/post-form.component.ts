import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input()
  post: Post = new Post();

  @Output()
  postAdded = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submit() {
    if (this.post.id) {
      this.postService.updatePost(this.post).subscribe((post) => {
      })
    } else {
      this.postService.addPost(this.post).subscribe((post) => {
        this.post = new Post();
        this.postAdded.emit(post)
      })
    }
  }

}
