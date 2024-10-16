import { Component, Input } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-category-items',
  standalone: true,
  imports: [],
  templateUrl: './category-items.component.html',
  styleUrl: './category-items.component.css'
})
export class CategoryItemsComponent {
  @Input() categoryInfo!: Category;
}
