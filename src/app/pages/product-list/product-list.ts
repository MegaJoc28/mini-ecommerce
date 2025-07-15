import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../../services/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,  // Aquí indicas que es standalone
  imports: [CommonModule],  // Importas los módulos que necesites
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products = [
    {
      id: 1,
      name: 'Camiseta Angular',
      description: 'Camiseta oficial del framework Angular.',
      price: 19.99,
      imageUrl: 'https://devwear.co/cdn/shop/files/ImagendeWhatsApp2024-01-31alas12.34.17_606b124c.jpg?v=1706723156'
    },
    {
      id: 2,
      name: 'Taza TypeScript',
      description: 'Para tus mañanas de código.',
      price: 9.99,
      imageUrl: 'https://devwear.co/cdn/shop/products/MUG_TS_M1.jpg?v=1614304901'
    }
  ];

  constructor(private cart: Cart) { }

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }

  get cartItems(): Product[] {
    return this.cart.getItems();
  }

  clearCart() {
    this.cart.clearCart();
  }
}
