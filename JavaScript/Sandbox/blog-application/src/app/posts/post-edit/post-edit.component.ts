import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from './../post.service';
import { Post } from './../post.model';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';



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

  getCurrenDate() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    return currentDate;
  }

  private initForm() {
    let postTitle = '';
    let postBody = '';
    let postDate;

    if (this.editMode) {
     const post = this.postService.getPost(this.id);
      postTitle = post.title;
      postBody = post.body;
      postDate = post.date;
    }

    this.postForm = new FormGroup({
      'title': new FormControl(postTitle, [Validators.required, Validators.pattern(/^[.a-zA-Z0-9_-]*$/), Validators.maxLength(100)]),
      'body': new FormControl(postBody, [Validators.required, Validators.minLength(200), Validators.maxLength(5000)]),
      'date': new FormControl(postDate)
    });
    this.postForm.get('date').setValue(postDate);
  }
}
