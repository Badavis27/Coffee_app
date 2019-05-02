import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CupsPage } from './cups';

@NgModule({
  declarations: [
    CupsPage,
  ],
  imports: [
    IonicPageModule.forChild(CupsPage),
  ],
})
export class CupsPageModule {}
