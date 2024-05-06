import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MarketMaterialPrice } from 'src/app/models/market-material-price-model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-craft-superior',
  templateUrl: './craft-superior.component.html',
  styleUrls: ['./craft-superior.component.scss']
})
export class CraftSuperiorComponent {
  
  form?: FormGroup;
  craftPer:number=0;
  markerPer:number=0;
  marketMaterialPrice?:MarketMaterialPrice;

  constructor(public fb: FormBuilder,private commonSrv:CommonService) {
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      craftAmount: this.fb.control(20),
      craftGold: this.fb.control(222),
      marketPrice: this.fb.control(25),
      marketAmount: this.fb.control(1),
      items: this.fb.array([])
    })
    this.loadMarketMaterialData();
  }

  loadMarketMaterialData(){
    this.commonSrv.getMarketMaterialPrice().subscribe(res=>{
      this.marketMaterialPrice = res;
      this.addItem("Oreha Solar Carp",16,this.marketMaterialPrice?.OrehaSolarCarp,10);
      this.addItem("Natural Pearl",64,this.marketMaterialPrice?.NaturalPearl,10);
      this.addItem("Fish",128,this.marketMaterialPrice?.Fish,100);
      //
      this.calculate();
    })
  }

  get itemCtrls() {
    return this.form?.controls["items"] as FormArray;
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
