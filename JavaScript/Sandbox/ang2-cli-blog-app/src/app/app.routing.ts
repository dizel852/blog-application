import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./posts/posts.component";
import { PostAddComponent } from "./posts/post-add/post-add.component";
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostDetailComponent },
    { path: 'posts/:id/edit', component: PostEditComponent},
    { path: 'addpost', component: PostAddComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);