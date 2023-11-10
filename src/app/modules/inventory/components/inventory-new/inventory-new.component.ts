import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { EngravingEnum } from '../../enums/engraving';
import { NegativeEffectEnum } from '../../enums/negative-effect';
import { AccessoryTierEnum } from '../../enums/accessory-tier';
import { AccessoryTypeEnum } from '../../enums/accessory-type';
import { StatsEnum } from '../../enums/stats';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InventoryModel } from '../../models/inventory-model';
import { IgnNamesEnum } from '../../enums/ign-names';

@Component({
  selector: 'app-inventory-new',
  templateUrl: './inventory-new.component.html',
  styleUrls: ['./inventory-new.component.scss']
})
export class InventoryNewComponent implements OnInit, OnDestroy {
  destroyed$: Subject<void> = new Subject<void>();
  examplesList=[1,2,3];
  accessoryForm?:FormGroup;
  engravings :string[]=[];
  negatives:string[]=[];
  accessoryTiers:string[] =[];
  accessoryTypes:string[]=[];
  stats:string[]=[];
  ignNames:string[]=[];
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<InventoryNewComponent>,@Inject(MAT_DIALOG_DATA) public data: {accessory:InventoryModel}){

  }

  ngOnInit(): void {
    this.getAllOptions();
    this.initForm();
  }
  initForm(){
    this.accessoryForm = this.fb.group({
      id:this.fb.control(0),
      engraving1:this.fb.control(EngravingEnum.KeenBluntWeapon.toString()),
      engraving1Val:this.fb.control(null),
      engraving2:this.fb.control(EngravingEnum.MassIncrease.toString()),
      engraving2Val:this.fb.control(null),
      negative:this.fb.control(NegativeEffectEnum.AtkPower.toString()),
      negativeVal:this.fb.control(null),
      accessoryType:this.fb.control(AccessoryTypeEnum.Earring.toString()),
      accessoryTier:this.fb.control(AccessoryTierEnum.Relic.toString()),
      stats1:this.fb.control(StatsEnum.Swift.toString()),
      stats2:this.fb.control(null),
      ignName:this.fb.control(IgnNamesEnum.BigblackCoat.toString())
    })
    if(this.data && this.data.accessory){
      this.accessoryForm.patchValue({...this.data.accessory});
    }
  }
  getAllOptions(){
     Object.keys(EngravingEnum).forEach(element => {
      this.engravings.push(element);
    });
    Object.keys(NegativeEffectEnum).forEach(element => {
      this.negatives.push(element);
    });
    Object.keys(AccessoryTierEnum).forEach(element => {
      this.accessoryTiers.push(element);
    });
    Object.keys(AccessoryTypeEnum).forEach(element => {
      this.accessoryTypes.push(element);
    });
    Object.keys(StatsEnum).forEach(element => {
      this.stats.push(element);
    });
    Object.keys(IgnNamesEnum).forEach(element => {
      this.ignNames.push(element);
    });
  }


  add(){
    this.dialogRef.close(this.accessoryForm?.getRawValue());
  }

  cancel(){
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
