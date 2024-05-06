import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketMaterialPrice } from '../models/market-material-price-model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  MarketMaterialPrice?:MarketMaterialPrice;
  constructor(private http:HttpClient) { 
     this.getMarketMaterialPrice().subscribe(res=>{
      this.MarketMaterialPrice=res;
      console.log("MarketMaterialPrice: ",this.MarketMaterialPrice)
     });

  }

  getInventoryData(){
    let url = '../assets/data/inventory.json';
    return  this.http.get(url);
  }

  getMarketMaterialPrice():Observable<MarketMaterialPrice>{
    let url = '../assets/data/marketMaterialPrice.json';
    return  this.http.get(url);
  }
}
