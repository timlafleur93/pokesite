import { Component, OnInit } from '@angular/core';
import {CachedDataService} from "../../services/api/cache/cached-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cache : CachedDataService) { }

  ngOnInit() {
    if(this.cache) {
      console.log("great!");
    }
  }

}
