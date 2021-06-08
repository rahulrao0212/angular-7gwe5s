import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class CartService {
  constructor(private httpClient: HttpClient) {}

  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    this.httpClient.get<{ type: string; price: Number }>(
      '/assets/shipping.json'
    );
  }
}
