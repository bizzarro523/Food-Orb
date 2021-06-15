import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  total: number = 0;
  baseURl: string = "http://localhost:5000/fooditems";
  cartUrl: string = "http://localhost:6001/cart";

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get<Food[]>(this.baseURl);
  }

  addToCart(cart: Cart) {
    cart.id = Math.floor(Math.random() * 1000000000);
    return this.http.post<Cart>(this.cartUrl, cart);
  }

  getCartItems() {
    return this.http.get<Cart[]>(this.cartUrl);
  }
}
