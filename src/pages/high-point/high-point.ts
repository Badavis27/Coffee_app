import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the HighPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-high-point',
  templateUrl: 'high-point.html',
})
export class HighPointPage {

  number;
  number2;
  number3;
  number4;
  number5;
  number6;
  Espresso;
  Latte;
  Mocha_Bianca;
  Cinnamon_Rolls;
  Cream_Cheese_Danish;
  Handmade_Parfait;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HighPointPage');
  }



 sendItem(title: string, body: string){

   var order = {
     Espresso: this.Espresso,
     numof_Espresso: this.number
   }

   var order2 ={
     Latte: this.Latte,
     numof_Latte : this.number2
   }

   var order3 ={
     Mocha_Bianca: this.Mocha_Bianca,
     numof_MB: this.number3
   }

   var order4 ={
     Cinnamon_Rolls: this.Cinnamon_Rolls,
     numof_CR: this.number4
   }
   var order5 ={
     Cream_Cheese_Danish: this.Cream_Cheese_Danish,
     numof_CCD: this.number5
   }

   var order6 ={
     Handmade_Parfait: this.Handmade_Parfait,
     numof_HP: this.number6
   }

    if(this.Espresso != null && this.number != null){
    this.fdb.list('high-point').push(order)
      }
    if(this.Latte != null && this.number2 != null) {
       this.fdb.list('high-point').push(order2)
     }
    if(this.Mocha_Bianca != null && this.number3 != null){
        this.fdb.list('high-point').push(order3)
    }
    if(this.Cinnamon_Rolls != null && this.number4 != null) {
        this.fdb.list('high-point').push(order4)
    }
    if(this.Cream_Cheese_Danish != null && this.number5 != null){
        this.fdb.list('high-point').push(order5)
    }
    if(this.Handmade_Parfait != null && this.number6 != null) {
        this.fdb.list('high-point').push(order6)
    }
  }
  
   doAlert() {
    const alert = this.alertCtrl.create({
      title: 'Congrats',
      subTitle: 'all items selected have been to ordered',
      buttons: ['done']
    });
    alert.present();
  }

}
