import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the StarbucksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starbucks',
  templateUrl: 'starbucks.html',
})
export class StarbucksPage {

  number;
  number2;
  number3;
  number4;
  number5;
  number6;
  Iced_Coffee;
  Juniper_Creme;
  Caffe_Misto;
  Cheese_Danish;
  Almond_Croissant;
  Blueberry_Scone;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private fdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarbucksPage');
  }

  
 sendItem(title: string, body: string){

   var order = {
     Espresso: this.Iced_Coffee,
     numof_Espresso: this.number
   }

   var order2 ={
     Latte: this.Juniper_Creme,
     numof_Latte : this.number2
   }

   var order3 ={
     Mocha_Bianca: this.Caffe_Misto,
     numof_MB: this.number3
   }

   var order4 ={
     Cinnamon_Rolls: this.Cheese_Danish,
     numof_CR: this.number4
   }
   var order5 ={
     Cream_Cheese_Danish: this.Almond_Croissant,
     numof_CCD: this.number5
   }

   var order6 ={
     Handmade_Parfait: this.Blueberry_Scone,
     numof_HP: this.number6
   }

    if(this.Iced_Coffee != null && this.number != null){
    this.fdb.list('starbucks').push(order)
      }
    if(this.Juniper_Creme != null && this.number2 != null) {
       this.fdb.list('starbucks').push(order2)
     }
    if(this.Caffe_Misto != null && this.number3 != null){
        this.fdb.list('starbucks').push(order3)
    }
    if(this.Cheese_Danish != null && this.number4 != null) {
        this.fdb.list('starbucks').push(order4)
    }
    if(this.Almond_Croissant != null && this.number5 != null){
        this.fdb.list('starbucks').push(order5)
    }
    if(this.Blueberry_Scone != null && this.number6 != null) {
        this.fdb.list('starbucks').push(order6)
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
