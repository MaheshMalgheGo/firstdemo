import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoMasterComponent } from './demo-master/demo-master.component';
import { DemopurchaseComponent } from './demopurchase/demopurchase.component';
import { DemosaleComponent } from './demosale/demosale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DemoMasterComponent,
    DemopurchaseComponent,
    DemosaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
