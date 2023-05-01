import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';

import { Categories } from '../shared/categories';
=======
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../categories.service';
>>>>>>> bcc323e4cc9d18ed273fc5d1d9199d39d41aeddd
import { Category } from '../shared/category';

@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css'],
})
export class SingleProductDetailComponent implements OnInit {
  singleProduct: Category;

<<<<<<< HEAD
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.singleProduct = Categories.filter(
      (product: Category) => product.name === this.route.snapshot.params['name']
    )[0];
    // console.log(this.singleProduct);
  }

  toCategoriesButton() {
    this.router.navigate(['/categories']);
=======
  constructor(
    private route: ActivatedRoute,
    private cateServ: CategoriesService
  ) {}

  ngOnInit(): void {
    this.singleProduct = this.cateServ.getFood(
      Number(this.route.snapshot.params['id'])
    );
>>>>>>> bcc323e4cc9d18ed273fc5d1d9199d39d41aeddd
  }
}
