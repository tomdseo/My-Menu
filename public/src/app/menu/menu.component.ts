import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
allDish = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllDish()
  }

  getAllDish() {
    let observable = this._httpService.getAllDish();
    observable.subscribe((data: any) => {
      for(let dish of data) {
        this.allDish.push(dish);
      }
    })
  }

  onDeleteDish(dishID) {
    this._httpService.deleteDish(dishID).subscribe(() => {
    })
    this.allDish = []
    this.getAllDish();
  }

}
