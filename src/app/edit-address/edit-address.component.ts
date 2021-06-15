import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  addressId: any;

  editForm!: FormGroup;
  constructor(private router: Router, private addressService: AddressService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      id: new FormControl(),
      userId: new FormControl(),
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });

    this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');

    this.addressService.getSpecificAddress(this.addressId).subscribe((response) => {
      this.editForm.setValue(response);
    })
  }

  updateAddress() {
    let address = this.editForm.value;

    this.addressService.updateAddress(address).subscribe((response) => {
      this.router.navigate(['/address', address.userId]);
    })
  }

}
