import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {InfoComponent} from "./info/info.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "info",
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
