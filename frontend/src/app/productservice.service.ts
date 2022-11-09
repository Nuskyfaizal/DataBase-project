import { Injectable } from '@angular/core';
import { Product } from './models/poduct.model';
import { WebReqServiceService } from './web-req-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private webService: WebReqServiceService) { }

  getAllProducts(){
    return this.webService.get('products');
  }

  postProduct(addProduct:Product){
    return this.webService.post('products', addProduct);
  }

  getOneProduct(productId:Product['id']){
    return this.webService.get(`products/${productId}`)
  }

  editOneProduct(productId:Product['id'], payload){
    return this.webService.put(`products/${productId}`, payload)
  }

  deleteProduct(productId:Product['id']){
    return this.webService.delete(`products/${productId}`);
  }

}
