import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl: string = 'http://localhost:6002/addresses';

  constructor(private http: HttpClient) { }

  addAddress(address: Address) {
    address.id = Math.floor(Math.random() * 1000000000);
    return this.http.post<Address>(this.baseUrl, address);
  }

  getAddress() {
    return this.http.get<Address[]>(this.baseUrl);
  }

  deleteAddress(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getSpecificAddress(addressId: string) {
    return this.http.get<Address>(this.baseUrl + '/' + addressId)
  }

  updateAddress(address: Address) {
    return this.http.put<Address>(this.baseUrl + '/' + address.id, address);
  }

}
