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
    private route: ActivatedRoute) {
      // TO-DO: Remove timeout.Refactor post.service. Observables work incorrectly
      setTimeout(() => {
      this.postService.getPosts();
    }, 500);
      console.log("Post-list constructor called!(refresh)")
     }

  ngOnInit() {
    this.subscription = this.postService.postsChanged
      .subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
      );
    console.log("Post-list ngOnInit called!")
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
