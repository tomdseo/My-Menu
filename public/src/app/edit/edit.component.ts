import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
errors = null;
dish: any;

  constructor(private _httpService:HttpService,
              private _router:Router,
              private _route : ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getDish(params.id)
          .subscribe((data: any) => {
            this.dish = data;
          })
      })
  }

  onEditDish() {
    this._httpService.updateDish(this.dish._id, this.dish).subscribe(obj => {
      if (obj.hasOwnProperty('errors')) {
        //@ts-ignore
        console.log("Here are the Errors", obj.errors);
        //@ts-ignore
        this.errors = obj.errors;
      } else {
        this._router.navigate(['/menu'])
      }
    })
  }
}
