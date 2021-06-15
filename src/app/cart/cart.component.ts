import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../interfaces/cart';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  userId: any
  cartItems: Cart[] = [];
  total: number = 0;
  private value: any;
  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.foodService.getCartItems().subscribe((response) => {
      this.cartItems = response;
      this.findCartTotal(this.cartItems)
    })

  }
  findCartTotal(data: any) {
    this.value = data
    for (let j = 0; j < data.length; j++) {
      if (this.userId == this.value[j].userId)
        this.total += this.value[j].cost
    }
  }

  placeOrder() {
    this.router.navigate(['/trackorder', this.userId]);
  }
}
