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
  hasError = false;
  constructor(private service: ProductserviceService, private route: Router) {}

  ngOnInit(): void {}

  validateQty(purchase: Number, sold: Number) {
    if (purchase < sold) {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
  }

  addNewProduct(formValue: Product) {
    let availQty = formValue.purchasedQty - formValue.soldQty;

    if (formValue.purchasedQty > formValue.soldQty) {
      let addProduct: Product = {
        id: formValue.id,
        name: formValue.name,
        description: formValue.description,
        purchasedQty: formValue.purchasedQty,
        soldQty: formValue.soldQty,
        availableQty: availQty,
        supplier: formValue.supplier,
        costPrice: formValue.costPrice,
        sellingPrice: formValue.sellingPrice,
      };

      this.service.postProduct(addProduct).subscribe((res) => {
        console.log(res);
        this.route.navigate(['']);
      });
    } else {
      alert('asdaszxcxzccdasd');
    }
  }
}
