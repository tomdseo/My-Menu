import { EditComponent } from "./edit/edit.component";
import { MenuComponent } from "./menu/menu.component";
import { NewComponent} from "./new/new.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'menu', component: MenuComponent},
      { path: 'menu/new', component: NewComponent},
      { path: 'menu/edit/:id', component: EditComponent },
      // {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
