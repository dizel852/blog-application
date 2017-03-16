import { Routes } from '@angular/router';

import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const POST_ROUTES: Routes = [
    {path: 'new', component: PostEditComponent },
    {path: ':id', component: PostDetailComponent },
    {path: ':id/edit', component: PostEditComponent}
];
