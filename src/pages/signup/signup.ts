import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

   signup(){
   try{
    const result = this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);

   if(result) {
    const alert = this.alertCtrl.create({
      title: 'Congrats',
      subTitle: 'now go to the Login page!',
      buttons: ['done']
    });
    alert.present();
  }
    
  }
    catch(e) {
      console.error(e);
    }
    
  }

}

