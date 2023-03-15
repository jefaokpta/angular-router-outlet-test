import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ParagrafoComponent } from './paragrafo/paragrafo.component';
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    HomeComponent,
    ParagrafoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterOutlet
  ]
})
export class HomeModule { }
