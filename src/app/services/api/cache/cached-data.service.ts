import {Injectable} from '@angular/core';
import {Pokemon} from '../../../types/Pokemon/Pokemon';
import {APIResourceList} from '../../../types/APIResourceList';
import {Generation} from '../../../types/Games/Generation';
import {Pokedex} from '../../../types/Games/Pokedex';
import {BerryControllerService} from '../berry-controller-service/berry-controller.service';
import {Berry} from '../../../types/Berries/Berry';
import {BerryFirmness} from '../../../types/Berries/BerryFirmness';
import {BerryFlavor} from '../../../types/Berries/BerryFlavor';
import {PokemonControllerService} from '../pokemon-controller-service/pokemon-controller.service';
import {ContestType} from '../../../types/Contests/ContestType';
import {ContestEffect} from '../../../types/Contests/ContestEffect';
import {SuperContestEffect} from '../../../types/Contests/SuperContestEffect';
import {EncounterMethod} from '../../../types/Encounters/EncounterMethod';
import {EncounterCondition} from '../../../types/Encounters/EncounterCondition';
import {EncounterConditionValue} from '../../../types/Encounters/EncounterConditionValue';
import {EvolutionChain} from '../../../types/Evolution/EvolutionChain';
import {EvolutionTrigger} from '../../../types/Evolution/EvolutionTrigger';
import {Version} from '../../../types/Games/Version';
import {VersionGroup} from '../../../types/Games/VersionGroup';
import {Item} from '../../../types/Items/Item';
import {ItemAttribute} from '../../../types/Items/ItemAttribute';
import {ItemCategory} from '../../../types/Items/ItemCategory';
import {ItemFlingEffect} from '../../../types/Items/ItemFlingEffect';
import {ItemPocket} from '../../../types/Items/ItemPocket';
import {LocationArea} from '../../../types/Locations/LocationArea';
import {PalParkArea} from '../../../types/Locations/PalParkArea';
import {Region} from '../../../types/Locations/Region';
import {Machine} from '../../../types/Machines/Machine';
import {Move} from '../../../types/Moves/Move';
import {MoveAilment} from '../../../types/Moves/MoveAilment';
import {MoveBattleStyle} from '../../../types/Moves/MoveBattleStyle';
import {MoveCategories} from '../../../types/Moves/MoveCategories';
import {MoveDamageClasses} from '../../../types/Moves/MoveDamageClasses';
import {MoveLearnMethod} from '../../../types/Moves/MoveLearnMethod';
import {MoveTarget} from '../../../types/Moves/MoveTarget';
import {Ability} from '../../../types/Pokemon/Ability';
import {Characteristic} from '../../../types/Pokemon/Characteristic';
import {EggGroup} from '../../../types/Pokemon/EggGroup';
import {Gender} from '../../../types/Pokemon/Gender';
import {GrowthRate} from '../../../types/Pokemon/GrowthRate';
import {Nature} from '../../../types/Pokemon/Nature';
import {PokeathlonStat} from '../../../types/Pokemon/PokeathlonStat';
import {PokemonColor} from '../../../types/Pokemon/PokemonColor';
import {PokemonForm} from '../../../types/Pokemon/PokemonForm';
import {PokemonHabitat} from '../../../types/Pokemon/PokemonHabitat';
import {PokemonShape} from '../../../types/Pokemon/PokemonShape';
import {PokemonSpecies} from '../../../types/Pokemon/PokemonSpecies';
import {Stat} from '../../../types/Pokemon/Stat';
import {Type} from '../../../types/Pokemon/Type';
import {ContestControllerService} from '../contest-controller-service/contest-controller.service';
import {EncounterControllerService} from '../encounter-controller-service/encounter-controller.service';
import {EvolutionControllerService} from '../evolution-controller-service/evolution-controller.service';
import {GameControllerService} from '../games-controller-service/game-controller.service';
import {ItemControllerService} from '../item-controller/item-controller.service';
import {LocationControllerService} from '../location-controller-service/location-controller.service';
import {MachineControllerService} from '../machine-controller-service/machine-controller.service';
import {MoveControllerService} from '../move-controller/move-controller.service';
import {Language} from '../../../types/Utility/Language';
import {NamedAPIResourceList} from '../../../types/NamedAPIResourceList';

@Injectable({
  providedIn: 'root'
})
export class CachedDataService {

  private resourceList: APIResourceList;
  private namedResourceList: NamedAPIResourceList;

  // berry stuff
  public cached_berries: Berry[];
  public cached_berry_firmnesses: BerryFirmness[];
  public cached_berry_flavors: BerryFlavor[];

  // contest stuff
  public cached_contest_types: ContestType[];
  public cached_contest_effect: ContestEffect[];
  public cached_super_contest_effect: SuperContestEffect[];

  // encounter stuff
  public cached_encounter_methods: EncounterMethod[];
  public cached_encounter_conditions: EncounterCondition[];
  public cached_encounter_condition_value: EncounterConditionValue[];

  // evolution stuff
  public cached_evolution_chain: EvolutionChain[];
  public cached_evolution_trigger: EvolutionTrigger[];

  // games stuff
  public cached_generations: Generation[];
  public cached_pokedexes: Pokedex[];
  public cached_versions: Version[];
  public cached_version_groups: VersionGroup[];

  // item stuff
  public cached_items: Item[];
  public cached_item_attribute: ItemAttribute[];
  public cached_item_category: ItemCategory[];
  public cached_item_fling_effect: ItemFlingEffect[];
  public cached_item_pocket: ItemPocket[];

  // locations stuff
  public cached_locations: Location[];
  public cached_location_areas: LocationArea[];
  public cached_palpark_areas: PalParkArea[];
  public cached_regions: Region[];

  // machine stuff
  public cached_machines: Machine[];

  // moves stuff
  public cached_moves: Move[];
  public cached_move_ailments: MoveAilment[];
  public cached_move_battle_style: MoveBattleStyle[];
  public cached_move_category: MoveCategories[];
  public cached_move_damage_class: MoveDamageClasses[];
  public cached_move_learn_method: MoveLearnMethod[];
  public cached_move_target: MoveTarget[];

  // Pokemon stuff
  public cached_pokemon: Pokemon[];
  public cached_abilities: Ability[];
  public cached_characteristics: Characteristic[];
  public cached_egg_groups: EggGroup[];
  public cached_gender: Gender[];
  public cached_growth_rates: GrowthRate[];
  public cached_natures: Nature[];
  public cached_pokeathlon_stat: PokeathlonStat[];
  public cached_pokemon_color: PokemonColor[];
  public cached_pokemon_form: PokemonForm[];
  public cached_pokemon_habitat: PokemonHabitat[];
  public cached_pokemon_shape: PokemonShape[];
  public cached_pokemon_species: PokemonSpecies[];
  public cached_pokemon_stats: Stat[];
  public cached_pokemon_type: Type[];
  public cached_languages: Language[];

  constructor(
    private berryService: BerryControllerService,
    private contestService: ContestControllerService,
    private encounterService: EncounterControllerService,
    private evolutionService: EvolutionControllerService,
    private gameService: GameControllerService,
    private itemService: ItemControllerService,
    private locationService: LocationControllerService,
    private machineService: MachineControllerService,
    private moveService: MoveControllerService,
    private pokemonService: PokemonControllerService,
  ) {
    /*    this.get_berry_data();
        this.get_contest_data();
        this.get_encounters_data();
        this.get_evolutions_data();

        this.get_item_data();
        this.get_locations_data();
        this.get_machines_data();
        this.get_moves_data();*/
    this.get_pokemon_data();
    this.get_games_data();
  }

  // Berry Stuff
  public get_berry_data(): void {
    this.berryService.findAllBerries(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_berries = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.berryService.findBerry(strs[6]).subscribe(
            response => {
              let b: Berry = response;
              this.cached_berries[i] = b;
            }
          );
        }
      }
    );

    this.berryService.findAllBerryFirmnesses(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_berry_firmnesses = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.berryService.findBerryFirmness(strs[6]).subscribe(
            response => {
              let bf: BerryFirmness = response;
              this.cached_berry_firmnesses[i] = bf;
            }
          );
        }
      }
    );

    this.berryService.findAllBerryFlavors(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_berry_flavors = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.berryService.findBerryFlavor(strs[6]).subscribe(
            response => {
              let bf: BerryFlavor = response;
              this.cached_berry_flavors[i] = bf;
            }
          );
        }
      }
    );
  }

  // Contest stuff
  public get_contest_data(): void {
    this.contestService.findAllContestTypes(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_contest_types = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.contestService.findContestType(strs[6]).subscribe(
            response => {
              let p: ContestType = response;
              this.cached_contest_types[i] = p;
            }
          );
        }
      }
    );

    this.contestService.findAllContestEffects(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_contest_effect = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.contestService.findContestEffect(strs[6]).subscribe(
            response => {
              let p: ContestEffect = response;
              this.cached_contest_effect[i] = p;
            }
          );
        }
      }
    );

    this.contestService.findAllSuperContestEffects(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_super_contest_effect = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.contestService.findSuperContestEffect(strs[6]).subscribe(
            response => {
              let p: SuperContestEffect = response;
              this.cached_super_contest_effect[i] = p;
            }
          );
        }
      }
    );
  }

  // Encounters stuff
  public get_encounters_data(): void {
    this.encounterService.findAllEncounterMethods(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_encounter_methods = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.encounterService.findEncounterMethod(strs[6]).subscribe(
            response => {
              let p: EncounterMethod = response;
              this.cached_encounter_methods[i] = p;
            }
          );
        }
      }
    );

    this.encounterService.findAllEncounterConditions(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_encounter_conditions = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.encounterService.findEncounterCondition(strs[6]).subscribe(
            response => {
              let p: EncounterCondition = response;
              this.cached_encounter_conditions[i] = p;
            }
          );
        }
      }
    );

    this.encounterService.findAllEncounterConditionValues(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_encounter_condition_value = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.encounterService.findEncounterConditionValue(strs[6]).subscribe(
            response => {
              let p: EncounterConditionValue = response;
              this.cached_encounter_condition_value[i] = p;
            }
          );
        }
      }
    );
  }

  // evolution stuff
  public get_evolutions_data(): void {
    this.evolutionService.findAllEvolutionChains(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_evolution_chain = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.evolutionService.findEvolutionChain(strs[6]).subscribe(
            response => {
              let p: EvolutionChain = response;
              this.cached_evolution_chain[i] = p;
            }
          );
        }
      }
    );

    this.evolutionService.findAllEvolutionTriggers(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_evolution_trigger = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.evolutionService.findEvolutionTrigger(strs[6]).subscribe(
            response => {
              let p: EvolutionTrigger = response;
              this.cached_evolution_trigger[i] = p;
            }
          );
        }
      }
    );
  }

  // games stuff
  public get_games_data(): void {
    this.gameService.findAllGenerations(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_generations = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          const strs: string[] = response.results[i].url.split('/');
          this.gameService.findGeneration(strs[6]).subscribe(
            response2 => {
              let p: Generation = response2;
              this.cached_generations[i] = p;
            }
          );
        }
      }
    );

    this.gameService.findAllPokedexes(1, 1).subscribe(
      response => {
        this.namedResourceList = response;
        this.cached_pokedexes = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.gameService.findPokedex(strs[6]).subscribe(
            response => {
              let p: Pokedex = response;
              this.cached_pokedexes[i] = p;
            }
          );
        }
      }
    );

    this.gameService.findAllVersions(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_versions = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.gameService.findVersion(strs[6]).subscribe(
            response => {
              let p: Version = response;
              this.cached_versions[i] = p;
            }
          );
        }
      }
    );

    this.gameService.findAllVersionGroups(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_version_groups = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.gameService.findVersionGroup(strs[6]).subscribe(
            response => {
              let p: VersionGroup = response;
              this.cached_version_groups[i] = p;
            }
          );
        }
      }
    );
  }

  // item stuff
  public get_item_data(): void {
    this.itemService.findAllItems(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_items = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.itemService.findItem(strs[6]).subscribe(
            response => {
              let p: Item = response;
              this.cached_items[i] = p;
            }
          );
        }
      }
    );

    this.itemService.findAllItemAttributes(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_item_attribute = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.itemService.findItemAttribute(strs[6]).subscribe(
            response => {
              let p: ItemAttribute = response;
              this.cached_item_attribute[i] = p;
            }
          );
        }
      }
    );

    this.itemService.findAllItemCategories(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_item_category = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.itemService.findItemCategory(strs[6]).subscribe(
            response => {
              let p: ItemCategory = response;
              this.cached_item_category[i] = p;
            }
          );
        }
      }
    );

    this.itemService.findAllItemFlingEffects(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_item_fling_effect = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.itemService.findItemFlingEffect(strs[6]).subscribe(
            response => {
              let p: ItemFlingEffect = response;
              this.cached_item_fling_effect[i] = p;
            }
          );
        }
      }
    );

    this.itemService.findAllItemPockets(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_item_pocket = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.itemService.findItemPocket(strs[6]).subscribe(
            response => {
              let p: ItemPocket = response;
              this.cached_item_pocket[i] = p;
            }
          );
        }
      }
    );
  }

  // locations stuff
  public get_locations_data(): void {
    this.locationService.findAllLocations(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_locations = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.locationService.findLocation(strs[6]).subscribe(
            response => {
              let p: Location = response;
              this.cached_locations[i] = p;
            }
          );
        }
      }
    );

    this.locationService.findAllLocationAreas(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_location_areas = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.locationService.findLocationArea(strs[6]).subscribe(
            response => {
              let p: LocationArea = response;
              this.cached_location_areas[i] = p;
            }
          );
        }
      }
    );

    this.locationService.findAllPalParkAreas(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_palpark_areas = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.locationService.findPalParkArea(strs[6]).subscribe(
            response => {
              let p: PalParkArea = response;
              this.cached_palpark_areas[i] = p;
            }
          );
        }
      }
    );

    this.locationService.findAllRegions(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_regions = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.locationService.findRegion(strs[6]).subscribe(
            response => {
              let p: Region = response;
              this.cached_regions[i] = p;
            }
          );
        }
      }
    );
  }

  // machine stuff
  public get_machines_data(): void {
    this.machineService.findAllMachines(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_machines = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.machineService.findMachine(strs[6]).subscribe(
            response => {
              let p: Machine = response;
              this.cached_machines[i] = p;
            }
          );
        }
      }
    );
  }

  // moves stuff
  public get_moves_data(): void {
    this.moveService.findAllMoves(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_moves = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.moveService.findMove(strs[6]).subscribe(
            response => {
              let p: Move = response;
              this.cached_moves[i] = p;
            }
          );
        }
      }
    );

    this.moveService.findAllMoveAilments(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_move_ailments = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.moveService.findMoveAilment(strs[6]).subscribe(
            response => {
              let p: MoveAilment = response;
              this.cached_move_ailments[i] = p;
            }
          );
        }
      }
    );

    this.moveService.findAllMoveBattleStyle(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_move_battle_style = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.moveService.findMoveBattleStyle(strs[6]).subscribe(
            response => {
              let p: MoveBattleStyle = response;
              this.cached_move_battle_style[i] = p;
            }
          );
        }
      }
    );

    this.moveService.findAllMoveCategories(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_move_category = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.moveService.findMoveCategories(strs[6]).subscribe(
            response => {
              let p: MoveCategories = response;
              this.cached_move_category[i] = p;
            }
          );
        }
      }
    );

    this.moveService.findAllMoveDamageClasses(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_move_damage_class = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.moveService.findMoveDamageClasses(strs[6]).subscribe(
            response => {
              let p: MoveDamageClasses = response;
              this.cached_move_damage_class[i] = p;
            }
          );
        }
      }
    );

    this.moveService.findAllMoveLearnMethods(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_move_learn_method = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.moveService.findMoveLearnMethod(strs[6]).subscribe(
            response => {
              let p: MoveLearnMethod = response;
              this.cached_move_learn_method[i] = p;
            }
          );
        }
      }
    );

    this.moveService.findAllMoveTargets(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_move_target = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.moveService.findMoveTarget(strs[6]).subscribe(
            response => {
              let p: MoveTarget = response;
              this.cached_move_target[i] = p;
            }
          );
        }
      }
    );
  }

  // pokemon stuff
  public get_pokemon_data(): void {
    this.pokemonService.findAllPokemon(0, 0).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findPokemon(strs[6]).subscribe(
            response => {
              let p: Pokemon = response;
              this.cached_pokemon[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllAbilities(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_abilities = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findAbility(strs[6]).subscribe(
            response => {
              let a: Ability = response;
              this.cached_abilities[i] = a;
            }
          );
        }
      }
    );

    this.pokemonService.findAllCharacteristics(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_characteristics = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findCharacteristic(strs[6]).subscribe(
            response => {
              let c: Characteristic = response;
              this.cached_characteristics[i] = c;
            }
          );
        }
      }
    );

    this.pokemonService.findAllEggGroups(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_egg_groups = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findEggGroup(strs[6]).subscribe(
            response => {
              let e: EggGroup = response;
              this.cached_egg_groups[i] = e;
            }
          );
        }
      }
    );

    this.pokemonService.findAllGenders(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_gender = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findGender(strs[6]).subscribe(
            response => {
              let g: Gender = response;
              this.cached_gender[i] = g;
            }
          );
        }
      }
    );

    this.pokemonService.findAllGrowthRates(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_growth_rates = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findGrowthRate(strs[6]).subscribe(
            response => {
              let g: GrowthRate = response;
              this.cached_growth_rates[i] = g;
            }
          );
        }
      }
    );

    this.pokemonService.findAllNatures(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_natures = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findNature(strs[6]).subscribe(
            response => {
              let n: Nature = response;
              this.cached_natures[i] = n;
            }
          );
        }
      }
    );

    this.pokemonService.findAllPokeathlonStats(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokeathlon_stat = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findPokeathlonStat(strs[6]).subscribe(
            response => {
              let p: PokeathlonStat = response;
              this.cached_pokeathlon_stat[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllPokemonColors(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon_color = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findPokemonColor(strs[6]).subscribe(
            response => {
              let p: PokemonColor = response;
              this.cached_pokemon_color[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllPokemonForms(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon_form = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findPokemonForm(strs[6]).subscribe(
            response => {
              let p: PokemonForm = response;
              this.cached_pokemon_form[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllPokemonHabitats(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon_habitat = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findPokemonHabitat(strs[6]).subscribe(
            response => {
              let p: PokemonHabitat = response;
              this.cached_pokemon_habitat[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllPokemonShapes(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon_shape = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findPokemonShape(strs[6]).subscribe(
            response => {
              let p: PokemonShape = response;
              this.cached_pokemon_shape[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllPokemonSpecies(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon_species = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findPokemonSpecies(strs[6]).subscribe(
            response => {
              let p: PokemonSpecies = response;
              this.cached_pokemon_species[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllStats(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon_stats = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findStat(strs[6]).subscribe(
            response => {
              let p: Stat = response;
              this.cached_pokemon_stats[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllTypes(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_pokemon_type = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findType(strs[6]).subscribe(
            response => {
              let p: Type = response;
              this.cached_pokemon_type[i] = p;
            }
          );
        }
      }
    );

    this.pokemonService.findAllLanguages(1, 1).subscribe(
      response => {
        this.resourceList = response;
        this.cached_languages = new Array(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
          let strs: string[] = response.results[i].url.split('/');
          this.pokemonService.findLanguage(strs[6]).subscribe(
            response => {
              let p: Language = response;
              this.cached_languages[i] = p;
            }
          );
        }
      }
    );
  }
}
