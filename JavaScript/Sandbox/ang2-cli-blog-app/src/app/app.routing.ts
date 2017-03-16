import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./posts/posts.component";
import { PostAddComponent } from "./posts/post-add/post-add.component";
import { POST_ROUTES } from "./posts/posts.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent, children: POST_ROUTES },
    { path: 'addpost', component: PostAddComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);