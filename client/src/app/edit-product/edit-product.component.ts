import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  setProduct:any;
  product: Product;
  errors:any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.product = new Product();
    this.setProduct = new Product();
    this.errors=[];
  }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
      this._route.params.subscribe( (params: Params) => {
      this._httpService.getProduct(params.id).subscribe(
          (product: Product) => {
              this.product = product[0];
          },
          (err: any) => {
              console.log(err);
          }
      )
    });

  }
  editProduct(){
    let tempObservable = this._httpService.createProducts(this.product);
    tempObservable.subscribe(data => console.log("creats our products!", data));
  }
  reset(){
    this.product = this.setProduct);
  }

}
