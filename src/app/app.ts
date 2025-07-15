import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./pages/product-list/product-list";
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(ProductList)
  .catch(err => console.error(err));

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mini-ecommerce');
}
