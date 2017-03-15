import { Injectable } from '@angular/core';

import { Post } from './post';

@Injectable()
export class PostService {

  private posts: Post[] = [
    new Post('Summer Salad', 'Okayish', '15 november' )
  ];
  constructor() { }

  getPosts() {
  return this.posts;
  }
  
  getPost(id: number) {
    return this.posts[id];
  }

  delete(post: Post){
    this.posts.splice(this.posts.indexOf(post),1)
  }
}

