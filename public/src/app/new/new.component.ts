import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors = null
  newDish = {title: "", calories: "", cost: "", image: ""};
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  onAddDish() {
    console.log("OnAdd Dish is called")
    this._httpService.addDish(this.newDish).subscribe(obj => {
      if (obj.hasOwnProperty('errors')) {
        //@ts-ignore
        console.log("Here are the Errors", obj.errors);
        //@ts-ignore
        this.errors = obj.errors;
      } else {
        this.newDish = {
          title: "",
          calories: "",
          cost: "",
          image: "",
        };
        this._router.navigate(['/menu'])
      }
    })
  };

}
