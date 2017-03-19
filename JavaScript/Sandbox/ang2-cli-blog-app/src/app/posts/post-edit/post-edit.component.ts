import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

import { Post } from './../post';
import { PostService } from './../post.service';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  private postIndex: number;
  private post: Post;
  private isNew = true;
  private subscripttion: Subscription;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router) { }
  
  ngOnInit() {
    this.subscripttion = this.route.params.subscribe(
    (params: any) => {
      if (params.hasOwnProperty('id')) {
        this.isNew = false;
        this.postIndex = +params['id'];
        this.post = this.postService.getPost(this.postIndex);
      } else {
        this.isNew = true;
        this.post = null;
        this.router.navigate(['../addpost'])
      }
      this.initForm();
    }
    );
  }

  onSubmit(){
    const newPost = this.postForm.value;
    if (this.isNew){
      this.postService.addPost(newPost);
    } else {
      this.postService.editPost(this.post, newPost);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  ngOnDestroy() {
    this.subscripttion.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let postTitle = '';
    let postBody = '';
    let postDate = '';

    if(!this.isNew) {
      postTitle = this.post.title;
      postBody = this.post.body;
      postDate = this.post.date;
    }
    this.postForm = this.formBuilder.group({
      title:[postTitle],
      body: [postBody],
      date: [postDate]
    });
  }
}
