import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  userId: any;
  name: string = " ";
  address: string = ' ';

  constructor(private router: Router, private addressService: AddressService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
  }

  addAddress() {
    let address = {
      id: 0,
      userId: this.userId,
      name: this.name,
      address: this.address
    }

    this.addressService.addAddress(address).subscribe((response) => {
      this.router.navigate(['/address', this.userId])
    })
  }

}
