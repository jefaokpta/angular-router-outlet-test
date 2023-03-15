import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ParagrafoComponent} from "./paragrafo/paragrafo.component";

const routes: Routes = [
  // {path: '', loadChildren: () => import('./home.module').then(m => m.HomeModule)}
  {
    path: '', component: HomeComponent, children: [
      {path: ':id', component: ParagrafoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
