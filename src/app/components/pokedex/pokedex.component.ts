import {Component, OnInit} from '@angular/core';
import {CachedDataService} from '../../services/api/cache/cached-data.service';
import {Pokedex} from '../../types/Games/Pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  generation: Pokedex;
  pokedexes: Pokedex[];

  hasloaded: boolean;
  constructor(private cache: CachedDataService) {
  }

  ngOnInit() {
    this.cache.get_games_data();

    setTimeout(() => {
      this.pokedexes = this.cache.cached_pokedexes;
      console.log(this.pokedexes);
    }, 3000);
  }

}
