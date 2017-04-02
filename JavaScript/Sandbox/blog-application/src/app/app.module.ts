import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { SharedComponent } from './shared/shared.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostListComponent } from './posts/post-list/post-list.component';
app

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    SharedComponent,
    PostDetailComponent,
    PostEditComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PostService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
