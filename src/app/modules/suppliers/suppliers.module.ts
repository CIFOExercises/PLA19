import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierRequestComponent } from './supplier-request/supplier-request.component';


@NgModule({
  declarations: [
    SupplierListComponent,
    SupplierRequestComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  exports: [
    SupplierListComponent,
    SupplierRequestComponent
  ]
})
export class SuppliersModule { }
