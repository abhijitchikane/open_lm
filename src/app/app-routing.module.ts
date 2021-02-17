import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'books', pathMatch: 'full',
  },
  {
    path: 'books', component: BooksComponent,
  },
  {
    path: 'books/:id', component: BookDetailComponent,
  },
  {
    path: '**', component: BooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
