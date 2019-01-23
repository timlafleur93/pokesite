import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {Machine} from "../../../types/Machines/Machine";

@Injectable({
  providedIn: 'root'
})
export class MachineControllerService {

  constructor(private http:HttpClient) { }

  public findMachine(id : string) : Observable<Machine> {
    return this.http.get<Machine>(urls.pokeAPI_base + urls.machine_url + id + '/');
  }

  public findAllMachines(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.machine_url);
  }
}
