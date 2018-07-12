import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  getProducts(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/products');
  }
  createProducts(product){
    console.log("this is whats ins sevice", product)
    // our http response is an Observable, store it in a variable
    return this._http.post('/products', product);
  }
  getProduct(id){
    // our http response is an Observable, store it in a variable
    return this._http.get('/products/'+ id);
  }
  editProduct(product){
    // our http response is an Observable, store it in a variable
    return this._http.patch('/products/'+ product._id, product);
  }
  deleteProducts(id){
    // our http response is an Observable, store it in a variable
    return this._http.delete('/products/'+ id);
  }
  likeProduct(id, product){
    console.log('/products/'+id+'/like')
    return this._http.patch('/products/'+id+'/like', product);
  }
}
