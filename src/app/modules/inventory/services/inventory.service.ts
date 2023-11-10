import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = '../assets/data/inventory.json';
    return  this.http.get(url);
  }
}
