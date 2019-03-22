import { Component, OnInit } from '@angular/core';
import {CachedDataService} from "../../services/api/cache/cached-data.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private cache : CachedDataService) { }

  ngOnInit() {
  }

}
