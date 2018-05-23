import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
product: Product;
errors:any;
  constructor(private _httpService: HttpService) {
    this.product = new Product();
    this.errors = [];
   }

  ngOnInit() {}

  newProduct(){
    let tempObservable = this._httpService.createProducts(this.product);
    tempObservable.subscribe(data => console.log("creats our products!", data));
  }
  reset(){
    this.product = new Product();
  }
}
