import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}
  shippingCosts = this.cartService.getShippingPrices();
  ngOnInit() {}
}
