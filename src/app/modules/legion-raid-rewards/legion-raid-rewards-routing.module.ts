import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegionRaidRewardsHomeComponent } from './components/legion-raid-rewards-home/legion-raid-rewards-home.component';

const routes: Routes = [{
  path:'',
  component:LegionRaidRewardsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegionRaidRewardsRoutingModule { }
