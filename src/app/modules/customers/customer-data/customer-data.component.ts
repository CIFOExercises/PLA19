import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css'],
})
export class CustomerDataComponent implements OnInit {
  customer: Customer;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: CustomersService
  ) {
    let id = this.activatedRoute.snapshot.params.id;
    let foundCustomer = this.service.getCustomer(parseInt(id))!
    if (!foundCustomer) {
      this.router.navigate(['clientes'])
    }

    this.customer = foundCustomer
  }

  ngOnInit(): void {}
}
