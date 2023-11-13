import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPokemonPlistRoutedComponent } from './components/pokemon/admin-pokemon-plist-routed/admin-pokemon-plist-routed.component';

const routes: Routes = [
    //--
    { path: 'admin/pokemon/plist', component: AdminPokemonPlistRoutedComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }