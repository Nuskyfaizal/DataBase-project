import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/poduct.model';
import { ProductserviceService } from 'src/app/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent implements OnInit {

  hasError = false
  constructor(private service: ProductserviceService, private route: Router) {}

  ngOnInit(): void {}

  validateQty(purchase,sold){
    if(purchase < sold) {
      this.hasError = true
    } else {
      this.hasError = false
    }
  }

  addNewProduct(formval: Product) {
    let availQty = formval.purchasedQty - formval.soldQty;

    if(formval.purchasedQty > formval.soldQty){
      let addProduct: Product = {
        id: formval.id,
        name: formval.name,
        description: formval.description,
        purchasedQty: formval.purchasedQty,
        soldQty: formval.soldQty,
        availableQty: availQty,
        supplier: formval.supplier,
        costPrice: formval.costPrice,
        sellingPrice: formval.sellingPrice,
      };

      this.service.postProduct(addProduct).subscribe((res) => {
        console.log(res);
        this.route.navigate(['']);
      });
    }

  }
}
