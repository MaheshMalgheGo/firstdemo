import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMasterComponent } from './demo-master/demo-master.component';
import { DemopurchaseComponent } from './demopurchase/demopurchase.component';
import { DemosaleComponent } from './demosale/demosale.component';

const routes: Routes = [
  { path: 'demo', component: DemoMasterComponent },
  { path: 'purchase', component: DemopurchaseComponent },
  { path: 'sale', component: DemosaleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
