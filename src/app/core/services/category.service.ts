import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResults } from '../../interfaces/category';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryData(): Observable<CategoryResults> {
    return this.http.get<CategoryResults>(`${environment.apiUrlBase}categories?page=1`);
  }
}
