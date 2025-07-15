import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  private items: Product[] = [];

  getItems(): Product[] {
    return this.items;
  }

  addToCart(product: Product) {
    this.items.push(product);
    console.log(`Producto agregado: ${product.name}`);
  }

  clearCart() {
    this.items = [];
  }
}
