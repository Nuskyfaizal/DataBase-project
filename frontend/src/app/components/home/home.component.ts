import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/poduct.model';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductserviceService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((productList: Product[]) => {
      console.log(productList);
      this.products = productList;
    });
  }

  deleteOneProduct(productId: Number) {
    this.service.deleteProduct(+productId).subscribe(() => {
      this.service.getAllProducts().subscribe((productList: Product[]) => {
        this.products = productList;
      });
    });
  }

  searchProduct(text){
    let foundItems = [];

      text = this.products.filter((product) => {
        if (product.name.toLowerCase().indexOf(text) > -1) {
          foundItems.push(product);
          this.products = foundItems;
        }
      });
  }
}
