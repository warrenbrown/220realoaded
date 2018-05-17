import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  post = new Post;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  createPost(post) {
    this.postService.createPost(post).subscribe(data => {
    return true;
  },
    error => {
      console.log('error creating post');
    });
  }

}
