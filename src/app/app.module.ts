import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminPokemonPlistRoutedComponent } from './components/pokemon/admin-pokemon-plist-routed/admin-pokemon-plist-routed.component';
import { AdminPokemonPlistUnroutedComponent } from './components/pokemon/admin-pokemon-plist-unrouted/admin-pokemon-plist-unrouted.component';
import { PokemonAjaxService } from './service/pokemon.ajax.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    AdminPokemonPlistRoutedComponent,
    AdminPokemonPlistUnroutedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [
    
    PokemonAjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
