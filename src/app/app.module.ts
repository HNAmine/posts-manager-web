import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'post-list', component: PostListComponent },
  { path: 'post-details/:id', component: PostDetailsComponent },
  {
    path: '',
    redirectTo: '/post-list',
    pathMatch: 'full'
  },
  { path: '**', component: PostListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFormComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
