import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para *ngFor y demás

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
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Taza TypeScript',
      description: 'Para tus mañanas de código.',
      price: 9.99,
      imageUrl: 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&h=150'
    }
  ];
}
