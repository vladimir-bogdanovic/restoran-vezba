import { Component, OnInit } from '@angular/core';
import { Categories } from '../shared/categories';
import { Category } from '../shared/category';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-foodcategories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css'],
})
export class FoodCategoriesComponent implements OnInit {
  categories: Category[] = Categories;
  searchForm = new FormGroup({
    search: new FormControl(),
  });

  get formData() {
    return this.searchForm.get('search');
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.formData.valueChanges.subscribe((input: string) => {
      this.categories = Categories.filter((categoryData: Category): boolean => {
        const inputValue = input.toLowerCase();
        return (
          categoryData.name.toLowerCase().includes(inputValue) ||
          categoryData.description.toLowerCase().includes(inputValue) ||
          categoryData.id.toString().includes(inputValue)
        );
      });
    });
  }

  onClickDetail(name: string) {
    this.router.navigate(['/categories', name]);
  }
}
