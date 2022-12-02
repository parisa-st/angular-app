import { Component, OnInit } from '@angular/core';
import { PostCommentsService } from '../services/postcomments.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.scss'],
})
export class PostCommentsComponent implements OnInit {
  postdata: any = history.state.data;
  postcomments: any;
  filteredComments: any;
  loading: boolean = true;

  constructor(
    private service: PostCommentsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getcomments();
  }

  getcomments(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.getPostcomments().subscribe(
      (response) => {
        this.loading = false;
        this.postcomments = response;
        this.filteredComments = this.postcomments.filter(
          (d: any) => d.postId === id
        );
      },
      (error) => {
        console.error('error caught in component');
        this.loading = false;
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
}
