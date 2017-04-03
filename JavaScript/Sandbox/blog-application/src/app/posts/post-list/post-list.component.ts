import { Response } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Post } from './../post.model';
import { PostService } from './../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  subscription: Subscription;

  constructor(private postService: PostService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.postService.postsChanged
      .subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
      );
    this.postService.getPosts();
    console.log("ngOnInit called!")
  }

  refresh() {
    this.postService.getPosts();
  }
  // storePosts() {
  //   this.postService.onStorePosts()
  //     .subscribe(
  //     (response: Response) => {
  //       console.log(response);
  //     }
  //   )
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
