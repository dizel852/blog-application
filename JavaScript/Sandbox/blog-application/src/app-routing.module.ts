import { PostDetailComponent } from './app/posts/post-detail/post-detail.component';
import { PostEditComponent } from './app/posts/post-edit/post-edit.component';
import { PostsComponent } from './app/posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts/:id/edit', component: PostEditComponent },
  { path: 'addpost', component: PostEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}