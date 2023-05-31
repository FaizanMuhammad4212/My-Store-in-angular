import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkOutForm = this.froms.group({
    name: '',
    address: '',
  });

  constructor(private cartService: CartService, private froms: FormBuilder) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('your order has been submitted', this.checkOutForm.value);
    window.alert(
      'your order with name ' + this.checkOutForm.value.name + ' is placed'
    );
    this.checkOutForm.reset();
  }
}
