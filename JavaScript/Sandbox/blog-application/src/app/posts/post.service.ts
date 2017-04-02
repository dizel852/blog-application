import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { Post } from './post.model';


@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [
    new Post(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'Thursday, March 23, 2017'),
    new Post('Big Fat Burger',
      'What else you need to say?',
      '16/02/1992')
  ];

  constructor(private http: Http) { }

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

  // getPosts() {
  //   return this.posts.slice();
  // }

  getPosts() {
    // return this.posts.slice();
    this.http.get('src/app/posts/posts.json')
      .map(
      (response: Response) => {
        const posts: Post[] = response.json();
        // for (let recipe of recipes) {
        //   if (!recipe['ingredients']) {
        //     recipe['ingredients'] = [];
        //   }
        // }
        return posts;
      }).subscribe(
      (posts: Post[]) => {
        this.setPosts(posts);
      }
      );
  }

  getPost(index: number) {
    return this.posts[index];
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postsChanged.next(this.posts.slice());
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.postsChanged.next(this.posts.slice());
  }
}
