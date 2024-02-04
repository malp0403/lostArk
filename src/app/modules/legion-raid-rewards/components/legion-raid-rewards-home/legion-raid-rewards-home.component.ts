import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'legion-raid-rewards-home',
  templateUrl: './legion-raid-rewards-home.component.html',
  styleUrls: ['./legion-raid-rewards-home.component.scss']
})
export class LegionRaidRewardsHomeComponent implements OnInit{
  materialFg:FormGroup = new FormGroup({});
  legionRaidFg:FormGroup = new FormGroup({});
  bestShardPotion:number = 0;
  legionRaidSummary:any={};
  constructor(public fb:FormBuilder,public cdRef:ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.initMaterialForm();
    this.updateBestShardPotions();
    this.updateLegionRaidSummary();
    this.onMaterialValueChanges();
    this.cdRef.detectChanges();
  }
  initMaterialForm(){
    this.materialFg= this.fb.group({
      Blue1:this.fb.control(1),
      Blue2:this.fb.control(1),
      Blue3:this.fb.control(5),
      Red1:this.fb.control(1),
      Red2:this.fb.control(5),
      Red3:this.fb.control(31),
      GreatLeapstone:this.fb.control(11),
      MarvalLeapstone:this.fb.control(24),
      RadiantLeapstone:this.fb.control(132),
      ShardSmall:this.fb.control(240),
      ShardMedian:this.fb.control(275),
      ShardLarge:this.fb.control(420),
    })
   
  }

  onMaterialValueChanges(){
    this.materialFg.valueChanges.pipe().subscribe(
      res=>{
      this.updateLegionRaidSummary();
      this.cdRef.detectChanges();
      }

    )
  }

  

  updateBestShardPotions(){
    let { ShardSmall, ShardMedian, ShardLarge } = this.materialFg.getRawValue();
    let s = ShardSmall / 500;
    let m = ShardMedian / 1000;
    let l = ShardLarge / 1500;
    if (s <= m && s <= l) {
      this.bestShardPotion = s;
    } else if (m <= s && m <= l) {
      this.bestShardPotion = m;
    } else {
      this.bestShardPotion = l;
    }
  }
  ValtanGate1={
    Blue:72 * 1,
        Red:36*2,
        Shard:1000*this.bestShardPotion,
        Leap:10*3,
  
        BlueAmount:720,
        RedAmount:360,
        ShardAmount:1000,
        LeapAmount:10,
        Sum: 0
  }

  updateLegionRaidSummary(){
    let { Blue1,Blue2,Blue3,Red1,Red2,Red3,
      GreatLeapstone,MarvalLeapstone,RadiantLeapstone,
      ShardSmall,ShardMedian,ShardLarge } = this.materialFg.getRawValue();

    let ValtanGate1={

    };

    let Valtan={
      Gate1:{
        Blue:72 * Blue1,
        Red:36*Red1,
        Shard:1000*this.bestShardPotion,
        Leap:10*GreatLeapstone,
  
        BlueAmount:720,
        RedAmount:360,
        ShardAmount:1000,
        LeapAmount:10,
        Sum: 0
      },
      Gate2:{
        Blue:96 * Blue1,
        Red:48*Red1,
        Shard:1300*this.bestShardPotion,
        Leap:10*GreatLeapstone,

        BlueAmount:960,
        RedAmount:480,
        ShardAmount:1300,
        LeapAmount:10,
        Sum:0
      }
    }
    Valtan.Gate1.Sum = Valtan.Gate1.Blue + Valtan.Gate1.Red + Valtan.Gate1.Shard+Valtan.Gate1.Leap;
    Valtan.Gate2.Sum = Valtan.Gate2.Blue + Valtan.Gate2.Red + Valtan.Gate2.Shard+Valtan.Gate2.Leap;

    let Vykas={
      Gate1:{
        Blue:90 * Blue1,
        Red:45*Red1,
        Shard:1600*this.bestShardPotion,
        Leap:12*GreatLeapstone,

        BlueAmount:900,
        RedAmount:540,
        ShardAmount:1600,
        LeapAmount:12,
        Sum: 0
      },
      Gate2:{
        Blue:104 * Blue1,
        Red:52*Red1,
        Shard:2000*this.bestShardPotion,
        Leap:12*GreatLeapstone,

        BlueAmount:1040,
        RedAmount:520,
        ShardAmount:2000,
        LeapAmount:12,
        Sum:0
      }
    };
    Vykas.Gate1.Sum = Vykas.Gate1.Blue + Vykas.Gate1.Red + Vykas.Gate1.Shard+Vykas.Gate1.Leap;
    Vykas.Gate2.Sum = Vykas.Gate2.Blue + Vykas.Gate2.Red + Vykas.Gate2.Shard+Vykas.Gate2.Leap;

    let Clown={
      Gate1:{
        Blue:60 * Blue1,
        Red:30*Red1,
        Shard:1300*this.bestShardPotion,
        Leap:12*GreatLeapstone,

        BlueAmount:600,
        RedAmount:300,
        ShardAmount:1300,
        LeapAmount:12,
        Sum: 0
      },
      Gate2:{
        Blue:84 * Blue1,
        Red:42*Red1,
        Shard:1300*this.bestShardPotion,
        Leap:12*GreatLeapstone,

        BlueAmount:840,
        RedAmount:420,
        ShardAmount:1300,
        LeapAmount:12,
        Sum:0
      },
      Gate3:{
        Blue:108 * Blue1,
        Red:54*Red1,
        Shard:1600*this.bestShardPotion,
        Leap:12*GreatLeapstone,

        BlueAmount:1080,
        RedAmount:540,
        ShardAmount:1600,
        LeapAmount:12,
        Sum:0
      }
    };
    Clown.Gate1.Sum = Clown.Gate1.Blue + Clown.Gate1.Red + Clown.Gate1.Shard+Clown.Gate1.Leap;
    Clown.Gate2.Sum = Clown.Gate2.Blue + Clown.Gate2.Red + Clown.Gate2.Shard+Clown.Gate2.Leap;
    Clown.Gate3.Sum = Clown.Gate3.Blue + Clown.Gate3.Red + Clown.Gate3.Shard+Clown.Gate3.Leap;

    let Brel={
      Gate1:{
        Blue:52 * Blue2,
        Red:26*Red2,
        Shard:3000*this.bestShardPotion,
        Leap:12*MarvalLeapstone,

        BlueAmount:520,
        RedAmount:260,
        ShardAmount:3000,
        LeapAmount:12,
        Sum: 0
      },
      Gate2:{
        Blue:84 * Blue2,
        Red:42*Red2,
        Shard:4000*this.bestShardPotion,
        Leap:16*MarvalLeapstone,

        BlueAmount:840,
        RedAmount:420,
        ShardAmount:4000,
        LeapAmount:16,
        Sum: 0
      },
      Gate3:{
        Blue:128 * Blue2,
        Red:64*Red2,
        Shard:5200*this.bestShardPotion,
        Leap:24*MarvalLeapstone,

        BlueAmount:1280,
        RedAmount:640,
        ShardAmount:5200,
        LeapAmount:24,
        Sum: 0
      },
      Gate4:{
        Blue:200 * Blue2,
        Red:100*Red2,
        Shard:10000*this.bestShardPotion,
        Leap:40*MarvalLeapstone,

        BlueAmount:2000,
        RedAmount:1000,
        ShardAmount:10000,
        LeapAmount:40,
        Sum: 0
      }
    };
    Brel.Gate1.Sum = Brel.Gate1.Blue + Brel.Gate1.Red + Brel.Gate1.Shard+Brel.Gate1.Leap;
    Brel.Gate2.Sum = Brel.Gate2.Blue + Brel.Gate2.Red + Brel.Gate2.Shard+Brel.Gate2.Leap;
    Brel.Gate3.Sum = Brel.Gate3.Blue + Brel.Gate3.Red + Brel.Gate3.Shard+Brel.Gate3.Leap;
    Brel.Gate4.Sum = Brel.Gate4.Blue + Brel.Gate4.Red + Brel.Gate4.Shard+Brel.Gate4.Leap;

    let Akkan={
      Gate1:{
        Blue:60 * Blue3,
        Red:30*Red3,
        Shard:1300*this.bestShardPotion,
        Leap:12*RadiantLeapstone,

        BlueAmount:600,
        RedAmount:300,
        ShardAmount:1300,
        LeapAmount:12,
        Sum: 0
      },
      Gate2:{
        Blue:60 * Blue3,
        Red:30*Red3,
        Shard:1300*this.bestShardPotion,
        Leap:12*RadiantLeapstone,

        BlueAmount:900,
        RedAmount:540,
        ShardAmount:1600,
        LeapAmount:12,
        Sum: 0
      },
      Gate3:{
        Blue:60 * Blue3,
        Red:30*Red3,
        Shard:1300*this.bestShardPotion,
        Leap:12*RadiantLeapstone,

        BlueAmount:900,
        RedAmount:540,
        ShardAmount:1600,
        LeapAmount:12,
        Sum: 0
      }
    };
    Akkan.Gate1.Sum = Akkan.Gate1.Blue + Akkan.Gate1.Red + Akkan.Gate1.Shard+Akkan.Gate1.Leap;
    Akkan.Gate2.Sum = Akkan.Gate2.Blue + Akkan.Gate2.Red + Akkan.Gate2.Shard+Akkan.Gate2.Leap;
    Akkan.Gate3.Sum = Akkan.Gate3.Blue + Akkan.Gate3.Red + Akkan.Gate3.Shard+Akkan.Gate3.Leap;

    let Kayangel={
      Gate1:{
        Blue:14*Blue3,
        Red:7*Red3,
        Shard:1500*this.bestShardPotion,
        Leap:3*RadiantLeapstone,

        BlueAmount:140,
        RedAmount:70,
        ShardAmount:1500,
        LeapAmount:3,
        Sum: 0
      },
      Gate2:{
        Blue:18*Blue3,
        Red:9*Red3,
        Shard:2000*this.bestShardPotion,
        Leap:4*RadiantLeapstone,

        BlueAmount:180,
        RedAmount:90,
        ShardAmount:2000,
        LeapAmount:4,
        Sum: 0
      },
      Gate3:{
        Blue:24*Blue3,
        Red:12*Red3,
        Shard:2500*this.bestShardPotion,
        Leap:6*RadiantLeapstone,

        BlueAmount:240,
        RedAmount:120,
        ShardAmount:2500,
        LeapAmount:6,
        Sum: 0
      }
    };
    Kayangel.Gate1.Sum =  Kayangel.Gate1.Shard+Kayangel.Gate1.Leap + Kayangel.Gate1.Blue+Kayangel.Gate1.Red;
    Kayangel.Gate2.Sum = Kayangel.Gate2.Shard+Kayangel.Gate2.Leap  + Kayangel.Gate2.Blue+Kayangel.Gate2.Red;
    Kayangel.Gate3.Sum =  Kayangel.Gate3.Shard+Kayangel.Gate3.Leap + + Kayangel.Gate3.Blue+Kayangel.Gate3.Red;

    let Tower={
      Gate1:{
        Blue:30*Blue3,
        Red:15*Red3,
        Shard:4000*this.bestShardPotion,
        Leap:3*RadiantLeapstone,

        BlueAmount:300,
        RedAmount:150,
        ShardAmount:4000,
        LeapAmount:3,
        Sum: 0
      },
      Gate2:{
        Blue:30*Blue3,
        Red:15*Red3,
        Shard:4000*this.bestShardPotion,
        Leap:3*RadiantLeapstone,

        BlueAmount:300,
        RedAmount:150,
        ShardAmount:4000,
        LeapAmount:3,
        Sum: 0
      },
      Gate3:{
        Blue:48*Blue3,
        Red:24*Red3,
        Shard:5000*this.bestShardPotion,
        Leap:5*RadiantLeapstone,

        BlueAmount:480,
        RedAmount:240,
        ShardAmount:5000,
        LeapAmount:5,
        Sum: 0
      },
      Gate4:{
        Blue:60*Blue3,
        Red:30*Red3,
        Shard:5500*this.bestShardPotion,
        Leap:7*RadiantLeapstone,

        BlueAmount:600,
        RedAmount:300,
        ShardAmount:5500,
        LeapAmount:7,
        Sum: 0
      }
    };
    Tower.Gate1.Sum =  Tower.Gate1.Shard+Tower.Gate1.Leap + Tower.Gate1.Blue + Tower.Gate1.Red;
    Tower.Gate2.Sum = Tower.Gate2.Shard+Tower.Gate2.Leap + Tower.Gate2.Blue + Tower.Gate2.Red;
    Tower.Gate3.Sum =  Tower.Gate3.Shard+Tower.Gate3.Leap + Tower.Gate3.Blue + Tower.Gate3.Red;
    Tower.Gate4.Sum =  Tower.Gate4.Shard+Tower.Gate4.Leap + Tower.Gate4.Blue + Tower.Gate4.Red;

    this.legionRaidSummary={
      Valtan:Valtan,
      Vykas:Vykas,
      Clown:Clown,
      Brel:Brel,
      Akkan:Akkan,
      Kayangel:Kayangel,
      Tower:Tower
    }
  }
}
