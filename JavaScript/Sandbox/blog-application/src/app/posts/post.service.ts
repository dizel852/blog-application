import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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


//   setRecipes(recipes: Recipe[]) {
//     this.recipes = recipes;
//     this.recipesChanged.next(this.recipes.slice());
//   }

  // getPosts() {
  //   return this.posts.slice();
  // }

  getPosts() {
    return this.posts.slice();
    
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
