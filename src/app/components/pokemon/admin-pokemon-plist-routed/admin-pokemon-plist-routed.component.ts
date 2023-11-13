import { Component, OnInit } from '@angular/core';
import { PokemonAjaxService } from 'src/app/service/pokemon.ajax.service';

@Component({
  selector: 'app-admin-pokemon-plist-routed',
  templateUrl: './admin-pokemon-plist-routed.component.html',
  styleUrls: ['./admin-pokemon-plist-routed.component.css']
})
export class AdminPokemonPlistRoutedComponent implements OnInit {

  constructor( private oPokemonAjaxService : PokemonAjaxService ) { }

  ngOnInit() {
  }

}
