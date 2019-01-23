import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {Item} from "../../../types/Items/Item";
import {ItemAttribute} from "../../../types/Items/ItemAttribute";
import {ItemCategory} from "../../../types/Items/ItemCategory";
import {ItemFlingEffect} from "../../../types/Items/ItemFlingEffect";
import {ItemPocket} from "../../../types/Items/ItemPocket";

@Injectable({
  providedIn: 'root'
})
export class ItemControllerService {

  constructor(private http:HttpClient) { }

  public findItem(id : string) : Observable<Item> {
    return this.http.get<Item>(urls.pokeAPI_base + urls.item_url + id + '/');
  }

  public findAllItems(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.item_url);
  }

  public findItemAttribute(id : string) : Observable<ItemAttribute> {
    return this.http.get<ItemAttribute>(urls.pokeAPI_base + urls.item_attribute_url + id + '/');
  }

  public findAllItemAttributes(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.item_attribute_url);
  }

  public findItemCategory(id : string) : Observable<ItemCategory> {
    return this.http.get<ItemCategory>(urls.pokeAPI_base + urls.item_category_url + id + '/');
  }

  public findAllItemCategories(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.item_category_url);
  }

  public findItemFlingEffect(id : string) : Observable<ItemFlingEffect> {
    return this.http.get<ItemFlingEffect>(urls.pokeAPI_base + urls.item_fling_effect_url + id + '/');
  }

  public findAllItemFlingEffects(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.item_fling_effect_url);
  }

  public findItemPocket(id : string) : Observable<ItemPocket> {
    return this.http.get<ItemPocket>(urls.pokeAPI_base + urls.item_pocket_url + id + '/');
  }

  public findAllItemPockets(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.item_pocket_url);
  }
}
