import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products: any;
  constructor(private _httpService: HttpService) {
  this.products=[];
  }

  ngOnInit() {
    this.getProducts()
  }
  getProducts(){
    let tempObservable = this._httpService.getProducts();
    tempObservable.subscribe(data => {
      console.log("got products", data),
      this.products=data;
    });
  }

}
