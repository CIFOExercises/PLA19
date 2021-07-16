import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/commons/home/home.component';
import { NotFoundComponent } from './modules/commons/not-found/not-found.component';
import { CustomerDataComponent } from './modules/customers/customer-data/customer-data.component';
import { CustomerListComponent } from './modules/customers/customer-list/customer-list.component';
import { CustomersComponent } from './modules/customers/customers/customers.component';
import { routes as STORING_ROUTES } from './modules/storing/storing-routing.module';
import { StoringComponent } from './modules/storing/storing/storing.component';
import { SupplierListComponent } from './modules/suppliers/supplier-list/supplier-list.component';
import { SupplierRequestComponent } from './modules/suppliers/supplier-request/supplier-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'clientes',
    component: CustomersComponent,
    children: [
      { path: 'listaclientes', component: CustomerListComponent },
      { path: 'detallecliente/:id', component: CustomerDataComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
  { path: 'listaproveedores', component: SupplierListComponent },
  { path: 'altaproveedores', component: SupplierRequestComponent },
  {
    path: 'almacen',
    component: StoringComponent,
    children: STORING_ROUTES,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
