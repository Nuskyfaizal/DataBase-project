import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/poduct.model';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productModel: Product;
  constructor(
    private service: ProductserviceService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param: Params) => {
      console.log(param);
      this.service.getOneProduct(+param.productId).subscribe((res: Product) => {
        console.log(res);
        this.productModel = res;
      });
    });
  }

  editProduct(editValues: Product) {
    console.log(editValues);

    let updateVal = {
      id: editValues.id,
      name: editValues.name,
      description: editValues.description,
      purchasedQty: editValues.purchasedQty,
      soldQty: editValues.soldQty,
      availableQty: editValues.purchasedQty - editValues.soldQty,
      supplier: editValues.supplier,
      costPrice: editValues.costPrice,
      sellingPrice: editValues.sellingPrice,
    };

    this.router.params.subscribe((param: Params) => {
      this.service.editOneProduct(+param.productId, updateVal).subscribe(() => {
        this.route.navigate(['']);
        this.service.getAllProducts();
      });
    });
  }
}
