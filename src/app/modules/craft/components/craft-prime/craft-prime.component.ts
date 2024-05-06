import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MarketMaterialPrice } from 'src/app/models/market-material-price-model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-craft-prime',
  templateUrl: './craft-prime.component.html',
  styleUrls: ['./craft-prime.component.scss']
})
export class CraftPrimeComponent {
  
  form?: FormGroup;
  craftPer:number=0;
  markerPer:number=0;
  marketMaterialPrice?:MarketMaterialPrice;
  constructor(public fb: FormBuilder,private commonSrv:CommonService) {
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      craftAmount: this.fb.control(15),
      craftGold: this.fb.control(267),
      marketPrice: this.fb.control(44),
      marketAmount: this.fb.control(1),
      items: this.fb.array([])
    })
    this.loadMarketMaterialData();

  }

  get itemCtrls() {
    return this.form?.controls["items"] as FormArray;
  }

  loadMarketMaterialData(){
    this.commonSrv.getMarketMaterialPrice().subscribe(res=>{
      this.marketMaterialPrice = res;
      this.addItem("Oreha Solar Carp",52,this.marketMaterialPrice?.OrehaSolarCarp,10);
      this.addItem("Natural Pearl",69,this.marketMaterialPrice?.NaturalPearl,10);
      this.addItem("Fish",142,this.marketMaterialPrice?.Fish,100);
      //
      this.calculate();
    })
  }

  addItem(name="",amount=0,gold=0,marketAmount=0) {
    let fg = this.fb.group({
      name:this.fb.control(name),
      amount: this.fb.control(amount),
      gold: this.fb.control(gold),
      marketAmount: this.fb.control(marketAmount)
    })
    this.itemCtrls.push(fg);
  }

  deleteCompareItem(lessonIndex: number) {
    this.itemCtrls.removeAt(lessonIndex);
  }

  calculate() {
    let sum =0;
    let values = this.itemCtrls.getRawValue();
    console.log(values);
    values.forEach(v=>{
      let {amount,gold,marketAmount} = v;
      sum += gold/marketAmount * amount;
    })

    var { craftAmount,
      craftGold,
      marketPrice,
      marketAmount} = this.form?.getRawValue();
    sum +=craftGold;

    this.craftPer = sum/craftAmount;

    this.markerPer = marketPrice/marketAmount;


  }


}
