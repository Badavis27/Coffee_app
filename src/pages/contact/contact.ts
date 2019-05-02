import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UpTownPage } from '../up-town/up-town';
import { CupsPage } from '../cups/cups';
import { HighPointPage } from '../high-point/high-point';
import { StarbucksPage } from '../starbucks/starbucks';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  load() {
  	this.navCtrl.push(UpTownPage, {
  		val: 'anishnirmal'
  	})
  }

  load2() {
  	this.navCtrl.push(CupsPage, {
  		val: 'anishnirmal'
  	})
  }

  load3() {
  	this.navCtrl.push(HighPointPage, {
  		val: 'anishnirmal'
  	})
  }

  load4() {
  	this.navCtrl.push(StarbucksPage, {
  		val: 'anishnirmal'
  	})
  }

}
