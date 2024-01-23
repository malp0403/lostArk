import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LegionRaidRewardsRoutingModule } from './legion-raid-rewards-routing.module';
import { LegionRaidRewardsHomeComponent } from './components/legion-raid-rewards-home/legion-raid-rewards-home.component';



@NgModule({
  declarations: [LegionRaidRewardsHomeComponent],
  imports: [
    LegionRaidRewardsRoutingModule,
    CommonModule,
    SharedModule
    ]
})
export class LegionRaidRewardsModule { }
