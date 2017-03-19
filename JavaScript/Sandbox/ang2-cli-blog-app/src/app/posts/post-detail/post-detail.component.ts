import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  
  selectedPost: Post;
  private postIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.postIndex = params['id'];
        this.selectedPost = this.postService.getPost(this.postIndex);
      }
    );
  }

  onEdit(){
    this.router.navigate(['/posts', this.postIndex, 'edit']);
  }

  onDelete(){
    this.postService.deletePost(this.selectedPost);
    this.router.navigate(['/posts']);
  }

  onBack(){
    this.router.navigate(['/posts']);
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
}
