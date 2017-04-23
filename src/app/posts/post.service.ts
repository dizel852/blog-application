import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { Post } from './post.model';


@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [];

  constructor(private http: Http) { }

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

  getPosts() {
    this.http.get('https://ng-post-blog.firebaseio.com/posts.json')
      .map(
      (response: Response) => {
        const posts: Post[] = response.json();
        return posts;
      }).subscribe(
      (posts: Post[]) => {
        this.setPosts(posts);
      }
      );
  }

  onStorePosts() {
    return this.http.put('https://ng-post-blog.firebaseio.com/posts.json', this.posts);
  }

  getPost(index: number) {
    return this.posts[index];
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postsChanged.next(this.posts.slice());
    this.onStorePosts().subscribe(
      error => console.log(error)
    );
  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postsChanged.next(this.posts.slice());
    this.onStorePosts().subscribe(
      error => console.log(error)
    );
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.postsChanged.next(this.posts.slice());
    this.onStorePosts().subscribe(
      error => console.log(error)
    );
  }
}
