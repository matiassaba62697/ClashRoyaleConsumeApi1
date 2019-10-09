import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import {ContentComponent} from "./components/content/content.component";
import {ClansComponent} from "./components/clans/clans.component";
import {CardComponent} from "./components/card/card.component";

const routes: Routes = [
{ path: 'home', component:HomeComponent},
{ path: 'jugador/:tag', component:ContentComponent},
{ path: 'clan/:tag', component:ClansComponent},
{ path: 'card/:tag', component:CardComponent},
{path: '**', pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
