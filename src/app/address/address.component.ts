import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../interfaces/address';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userId!: any;
  addresses: Address[] = [];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private addressService: AddressService) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.addressService.getAddress().subscribe((response) => {
      this.addresses = response;
    })
  }

  addAddress() {
    this.router.navigate(['addAddress', this.userId]);
  }

  deleteAddress(id: number) {
    if (confirm("Are you sure you want to delete this address?\nClick to continue")) {
      this.addressService.deleteAddress(id).subscribe((response) => {
        console.log(response)
      });
    }
  }

}
