import { Injectable } from '@angular/core';

import { Post } from './post';

@Injectable()
export class PostService {

  private posts: Post[] = [
    new Post('Why Will Angular 2 Rock?', 'Angular 2 is around the corner and there are mixed opinions about it. Some people can’t wait for it and other people are not any happy with it. Why is that? People are afraid to change, thinking that they wasted their time learning something that is now going to change in a radical way.', '15 november' )
  ];
  constructor() { }

  getPosts() {
  return this.posts;
  }
  
  getPost(id: number) {
    return this.posts[id];
  }

  addPost(post: Post){
    this.posts.push(post);
  }

  editPost(oldPost: Post, newPost: Post){
    this.posts[this.posts.indexOf(oldPost)] = newPost;
  }

  deletePost(post: Post){
    this.posts.splice(this.posts.indexOf(post),1)
  }
}

