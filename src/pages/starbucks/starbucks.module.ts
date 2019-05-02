import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarbucksPage } from './starbucks';

@NgModule({
  declarations: [
    StarbucksPage,
  ],
  imports: [
    IonicPageModule.forChild(StarbucksPage),
  ],
})
export class StarbucksPageModule {}
