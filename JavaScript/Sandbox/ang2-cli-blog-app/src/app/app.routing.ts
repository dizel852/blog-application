import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./posts/posts.component";
import { PostAddComponent } from "./posts/post-add/post-add.component";
// import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'addpost', component: PostAddComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);