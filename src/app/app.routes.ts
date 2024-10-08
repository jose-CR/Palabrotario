import { Routes } from '@angular/router';
import { CategoryComponent } from './pages/dictionary/category/category.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'categoria', component: CategoryComponent}
];
