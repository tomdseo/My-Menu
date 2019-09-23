import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAllDish() {
    return this._http.get('/api/menu')
  }

  getDish(dishID) {
    return this._http.get('/api/menu/' + dishID)
  }

  addDish(newDish) {
    return this._http.post('/api/menu/create', newDish)
  }

  updateDish(dishID, dish) {
    return this._http.put('/api/menu/update/' + dishID, dish)
  }

  deleteDish(dishID) {
    return this._http.delete('/api/menu/delete/' + dishID)
  }

}
