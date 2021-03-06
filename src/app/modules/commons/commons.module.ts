import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent
  ]
})
export class CommonsModule { }
