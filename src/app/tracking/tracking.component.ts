import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  userId: any;
  timeLeft: number = 1800;
  interval: any;
  status: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get("userId");

    this.interval = setInterval(() => {
      if (this.timeLeft > 0 && this.timeLeft > 15) {
        this.timeLeft--;
        this.status = "Placed"
      }
      else if (this.timeLeft > 0) {
        this.timeLeft--;
        this.status = "Picked Up"
      }
      else {
        this.status = "Delivered"
      }
    }, 1000)
  }

  cancelOrder() {
    if (confirm("Are you sure you want to cancel your order?")) {
      alert("Order has been cancelled");
    }
  }


}
