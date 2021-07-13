import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customers: Customer[] = [
    {
      id: 1,
      nom: 'Pedro',
      dir: 'Calle Alcalá',
      obs: 'Texto Random 1',
    },
    {
      id: 2,
      nom: 'Alba',
      dir: 'Calle Igualdad',
      obs: 'Texto Random 2',
    },
    {
      id: 3,
      nom: 'Laura',
      dir: 'Calle Libertad',
      obs: 'Texto Random 3',
    },
    {
      id: 4,
      nom: 'Jose',
      dir: 'Calle Providencia',
      obs: 'Texto Random 4',
    },
    {
      id: 5,
      nom: 'Olga',
      dir: 'Calle Picasso',
      obs: 'Texto Random 5',
    },
  ];

  constructor() {}

  getAllCustomers() {
    return this.customers;
  }

  getCustomer(id: number) {
    return this.customers.find((q) => q.id === id);
  }
}
