import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const producIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((prod) => prod.id === producIdFromRoute);
  }

  addtoCart(produc: Product) {
    this.cartService.addToCart(produc);
    window.alert('Your product has been added to the cart!');
  }
}
