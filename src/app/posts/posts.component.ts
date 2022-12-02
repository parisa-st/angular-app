import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  loading: boolean = true;
  constructor(private service: PostService) {}

  ngOnInit() {
    this.loading = true;
    this.service.getPosts().subscribe(
      (response) => {
        this.loading = false;
        this.posts = response;
      },
      (error) => {
        console.error('error caught in component');
        this.loading = false;
      }
    );
  }
}
