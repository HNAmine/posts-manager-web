import { Component, OnInit, TemplateRef } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  modalRef: BsModalRef;

  post: Post = new Post();
  constructor(private postService: PostService, private modalService: BsModalService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  updatePost(post) {
    this.post = post;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  postAdded(post: Post) {
    debugger;
    this.posts.push(post);
  }
}
