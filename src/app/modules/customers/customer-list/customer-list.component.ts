import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private service: CustomersService) {
    this.customers = this.service.getAllCustomers();
  }

  ngOnInit(): void {}
}
