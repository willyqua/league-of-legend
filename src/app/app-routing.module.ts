import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesdetailComponent } from './heroes-details/heroes-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: "", component: HeroesComponent },
  { path: "heroes", component: HeroesListComponent },
  { path: "users/:id", component: HeroesdetailComponent },
  { path: "**", component: HeroesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
