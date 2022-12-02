import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from'./pagenotfound/pagenotfound.component'
import { PostsComponent } from './posts/posts.component';
import { PostCommentsComponent } from './postcomments/postcomments.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: PostsComponent },
  { path: 'detail/:id', component: PostCommentsComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
