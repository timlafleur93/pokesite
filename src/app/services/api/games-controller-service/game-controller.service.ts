import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urls} from '../../../urls/urls';
import {APIResourceList} from '../../../types/APIResourceList';
import {Generation} from '../../../types/Games/Generation';
import {Pokedex} from '../../../types/Games/Pokedex';
import {Version} from '../../../types/Games/Version';
import {VersionGroup} from '../../../types/Games/VersionGroup';
import {NamedAPIResourceList} from '../../../types/NamedAPIResourceList';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {

  constructor(private http: HttpClient) {
  }

  public findGeneration(id: string): Observable<Generation> {
    return this.http.get<Generation>(urls.pokeAPI_base + urls.generation_url + id + '/');
  }

  public findAllGenerations(limit: number, offset: number): Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.generation_url);
  }

  public findPokedex(id: string): Observable<Pokedex> {
    return this.http.get<Pokedex>(urls.pokeAPI_base + urls.pokedex_url + id + '/');
  }

  public findAllPokedexes(limit: number, offset: number): Observable<NamedAPIResourceList> {
    return this.http.get<NamedAPIResourceList>(urls.pokeAPI_base + urls.pokedex_url);
  }

  public findVersion(id: string): Observable<Version> {
    return this.http.get<Version>(urls.pokeAPI_base + urls.version_url + id + '/');
  }

  public findAllVersions(limit: number, offset: number): Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.version_url);
  }

  public findVersionGroup(id: string): Observable<VersionGroup> {
    return this.http.get<VersionGroup>(urls.pokeAPI_base + urls.version_group_url + id + '/');
  }

  public findAllVersionGroups(limit: number, offset: number): Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.version_group_url);
  }

}
