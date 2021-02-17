import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private activateRoute: ActivatedRoute, 
    public router: Router) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.pipe(
      switchMap((params: any) => {
        return of(params);
      })
    ).subscribe(res=>this.book = res);
  }

}
