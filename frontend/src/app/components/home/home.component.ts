import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/poduct.model';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[];
  productsFromDb: Product[];

  constructor(private service: ProductserviceService) {}

  ngOnInit(): void {
    this.GetAllProductsFromDb();
  }

  deleteOneProduct(productId: Number) {
    this.service.deleteProduct(+productId).subscribe(() => {
      this.GetAllProductsFromDb();
    });
  }

  searchProduct(text) {
    // let foundItems = [];
    var s = '';
    if (!text) {
      this.products = this.productsFromDb;
    }
    this.products = this.productsFromDb.filter(
      (product) =>
        product.name.toLowerCase().includes(text.toLowerCase()) ||
        product.description.toLowerCase().includes(text.toLowerCase())
    );

    // this.products = this.products.((product) => {
    //   if (product.name.toLowerCase().indexOf(text) > -1) {
    //     foundItems.push(product);
    //     this.products = foundItems;
    //   }
    // });
  }

  private GetAllProductsFromDb() {
    this.service.getAllProducts().subscribe(
      (productList: Product[]) => {
        console.log(productList);
        this.productsFromDb = productList;
        this.products = productList;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
