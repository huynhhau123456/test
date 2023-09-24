import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorSearchComponentComponent } from './components/author-search-component/author-search-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthorDetailsModalComponent } from './components/author-details-modal/author-details-modal.component';
import { AuthorWorksComponent } from './components/author-works/author-works.component'
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[ 
  {path:'home',component:AuthorSearchComponentComponent},
  { path: 'authors/:authorKey/works', component: AuthorWorksComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorSearchComponentComponent,
    AuthorDetailsModalComponent,
    AuthorWorksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
