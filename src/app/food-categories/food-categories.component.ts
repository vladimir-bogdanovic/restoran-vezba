<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Categories } from '../shared/categories';
import { Category } from '../shared/category';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
=======
import { Component } from '@angular/core';
import { Categories } from '../shared/categories';
import { Category } from '../shared/category';
>>>>>>> bcc323e4cc9d18ed273fc5d1d9199d39d41aeddd

@Component({
  selector: 'app-foodcategories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css'],
})
<<<<<<< HEAD
export class FoodCategoriesComponent implements OnInit {
=======
export class FoodCategoriesComponent {
>>>>>>> bcc323e4cc9d18ed273fc5d1d9199d39d41aeddd
  categories: Category[] = Categories;
  searchForm = new FormGroup({
    search: new FormControl(),
  });
  pushArray = [];

<<<<<<< HEAD
  constructor(private router: Router) {}

  ngOnInit() {
    this.searchForm.get('search').valueChanges.subscribe((input: string) => {
      console.log(input);
      this.categories.map((data) => {
        data.name.toLowerCase();
        if (input.includes(data.name) && input.length === data.name.length) {
          this.pushArray.push(input);
          //  console.log(this.pushArray.push(input));
          //  console.log(this.pushArray);
          return this.pushArray;
        }
      });
    });
  }

  onClickDetail(name: string) {
    this.router.navigate(['/categories', name]);
  }
=======
  constructor() {}
>>>>>>> bcc323e4cc9d18ed273fc5d1d9199d39d41aeddd
}
