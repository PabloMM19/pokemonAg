import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminPokemonPlistRoutedComponent } from './components/pokemon/admin-pokemon-plist-routed/admin-pokemon-plist-routed.component';
import { AdminPokemonPlistUnroutedComponent } from './components/pokemon/admin-pokemon-plist-unrouted/admin-pokemon-plist-unrouted.component';
import { PokemonAjaxService } from './service/pokemon.ajax.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminPokemonPlistRoutedComponent,
    AdminPokemonPlistUnroutedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    
    PokemonAjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
