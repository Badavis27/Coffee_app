import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public app: App, public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  doAlert() {
    const alert = this.alertCtrl.create({
      title: 'in progress',
      subTitle: 'this will search for coffee shops',
      buttons: ['done']
    });
    alert.present();
  }

  welcome(){
    this.app.getRootNav().setRoot(WelcomePage);
  }

}
