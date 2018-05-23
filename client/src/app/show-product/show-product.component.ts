import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  product: Product;
  zero: Boolean;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.product = new Product();
    this.zero=false;
  }

  ngOnInit() {
    this.getProduct();

  }
  getProduct(){
      this._route.params.subscribe( (params: Params) => {
      this._httpService.getProduct(params.id).subscribe(
          (product: Product) => {
              this.product = product[0];
              if(this.product.qty == 0){
                this.zero = false;
              }
          },
          (err: any) => {
              console.log(err);
          }
      )
    });

  }
  delete(){
    console.log(this.product);
    this._httpService.deleteProducts(this.product._id).subscribe(
    (product: Product) => {
      this._router.navigate(['/product']);
    });
  }

}
