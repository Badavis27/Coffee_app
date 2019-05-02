import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighPointPage } from './high-point';

@NgModule({
  declarations: [
    HighPointPage,
  ],
  imports: [
    IonicPageModule.forChild(HighPointPage),
  ],
})
export class HighPointPageModule {}
