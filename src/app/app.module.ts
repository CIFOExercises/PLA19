import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './modules/commons/commons.module';
import { CustomersModule } from './modules/customers/customers.module';
import { StoringRoutingModule } from './modules/storing/storing-routing.module';
import { StoringModule } from './modules/storing/storing.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    StoringModule,
    CustomersModule,
    SuppliersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
