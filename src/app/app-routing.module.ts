import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from './info/info.component';
import {HomeComponent} from './home/home.component';
import {PosterComponent} from './poster/poster.component';
import {RollerComponent} from "./roller/roller.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'poster',
    component: PosterComponent
  },
  {
    path: 'roller',
    component: RollerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
