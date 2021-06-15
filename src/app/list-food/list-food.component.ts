import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../interfaces/food';
import { FoodService } from '../services/food.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {

  allFoods: Food[] = [];
  filteredFood: Food[] = [];
  searchString = "";
  total: number = 0;
  userId: any;

  constructor(private foodService: FoodService, private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.foodService.getAllItems().subscribe((response) => {
      this.allFoods = response;
      this.filteredFood = this.allFoods;
    })
  }

  filterFood() {
    this.allFoods = this.filteredFood.filter(
      (food: Food) => food.dish.toLocaleLowerCase().indexOf(this.searchString.toLocaleLowerCase()) != -1
    );
  }

  addToCart(food: Food) {
    if (confirm("Add order to cart?\nOrder Id:\n\n" + food.dish + " | $" + food.cost + "\nClick to continue")) {
      let cart = {
        id: 0,
        userId: this.userId,
        order: food.dish,
        cost: food.cost
      }
      this.foodService.addToCart(cart).subscribe((response) => {
        alert("Successully added to your cart!")
      })
    }
  }
}
