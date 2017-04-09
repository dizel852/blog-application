import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { PostService } from './../post.service';
import { Post } from './../post.model';



@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  id: number;
  editMode = false;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.postService.updatePost(this.id, this.postForm.value);
    } else {
      this.postService.addPost(this.postForm.value);
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let postTitle = '';
    let postBody = '';
    let postDate = '';

    if (this.editMode) {
     const post = this.postService.getPost(this.id);
      postTitle = post.title;
      postBody = post.body;
      postDate = post.date;
    }

    this.postForm = new FormGroup({
      'title': new FormControl(postTitle),
      'body': new FormControl(postBody),
      'date': new FormControl(postDate)
    });
  }
}
