import { Component, OnInit } from '@angular/core';
import {CachedDataService} from "../../services/api/cache/cached-data.service";
import { FormControl, FormGroup, FormsModule} from "@angular/forms";
import {GameControllerService} from "../../services/api/games-controller-service/game-controller.service";
import {APIResourceList} from "../../types/APIResourceList";
import {NamedAPIResource} from "../../types/Utility/NamedAPIResource";
import {Pokedex} from "../../types/Games/Pokedex";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  generation : Pokedex;
  pokedexes : Pokedex[];

  constructor(private cache: CachedDataService) { }

  ngOnInit() {
    this.cache.get_games_data();

    setTimeout(()=> {
      this.pokedexes = this.cache.cached_pokedexes;
      console.log(this.pokedexes);
    }, 3000);
  }

}
