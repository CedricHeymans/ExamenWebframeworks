import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class ProductService {
  constructor() {}

  getAllProducts() {
    let product1 = new Product("banana", "ikea", "banana van ikea", 5);
    let product2 = new Product(
      "disguisedBanana",
      "notIkea",
      "geen banana van ikea",
      500
    );
    var productenLijst: Product[];
    productenLijst.push(product1);
    productenLijst.push(product2);
    return productenLijst;
  }
}
