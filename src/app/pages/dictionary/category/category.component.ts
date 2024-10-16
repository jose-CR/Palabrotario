import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { CategoryResults } from '../../../interfaces/category';
import { CategoryService } from '../../../core/services/category.service';
import { CategoryItemsComponent } from '../../../components/category-items/category-items.component';
import { ErrorMessageComponent } from '../../../components/error-message/error-message.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [AsyncPipe, CategoryItemsComponent, ErrorMessageComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  public categoryResult$!: Observable<CategoryResults>
  public errorMessage: string = ''
  constructor(private service: CategoryService){}

  ngOnInit(): void {
    this.categoryResult$ = this.service.getCategoryData().pipe(
      catchError((error: any) => {
        this.errorMessage = error.message;
        return EMPTY;
      })
    );
  }
}
