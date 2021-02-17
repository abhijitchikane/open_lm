import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookForm: FormGroup;
  updatedBookForm: FormGroup;

  books: any[] = [
    {
      title: 'book1',
      author: 'john jocob',
      price: '20'
    },
    {
      title: 'book2',
      author: 'lorem ipsum',
      price: '20'
    },
    {
      title: 'book3',
      author: 'abhijit jocob',
      price: '20'
    },
  ]

  editIndex: number;
  originalBook: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
    })
    this.updatedBookForm= this.formBuilder.group({
      updatedTitle: ['', Validators.required],
      updatedAuthor: ['', Validators.required],
      updatedPrice: ['', Validators.required],
    })
  }

  onSubmit() {
    this.books.push(this.bookForm.value)
  }

  onEdit(index, book) {
    if(this.editIndex == index){
      this.editIndex = null;
    }else{
      this.originalBook = book;
      this.editIndex = index;
      this.updatedBookForm.patchValue({
        updatedTitle: book.title,
        updatedAuthor: book.author,
        updatedPrice: book.price,
      })
    }
    // this.editIndex = this.editIndex == index ? null : index;
  }

  onUpdate() {
    this.books[this.editIndex] = {
      title: this.updatedBookForm.value.updatedTitle,
      author: this.updatedBookForm.value.updatedAuthor,
      price: this.updatedBookForm.value.updatedPrice,
    };
    console.log(this.updatedBookForm.value)
    this.editIndex = null;
  }

  onDelete(index) {
    this.books.splice(index, 1);
  }

}
