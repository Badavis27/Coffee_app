import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CupsPage } from '../cups/cups';
import { createElement } from '@angular/core/src/view/element';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  
  input;
  mocha;
  number;
  number2;
  number3;
  number4;
  number5;
  number6;
  Capitol_Street_Latte;
  Blondie_Latte;
  Drip_Coffee;
  Shot_in_the_Dark;
  Cafe_Au_Lait;

  list: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

 // constructor(public alertCtrl: AlertController) { }

  doAlert() {
    const alert = this.alertCtrl.create({
      title: 'Congrats',
      subTitle: 'all orders selected have been purchased',
      buttons: ['done']
    });
    alert.present();
  }

  print(){
    

    var order = {
     mocha : this.mocha,
     numof_mocha: this.number
   }

   var order2 ={
     Capitol_Street_Latte: this.Capitol_Street_Latte,
     numof_CSL : this.number2
   }

   var order3 ={
     Blondie_Latte: this.Blondie_Latte,
     numof_Blondie: this.number3
   }

   var order4 ={
     Drip_Coffee: this.Drip_Coffee,
     numof_DripCoffee: this.number4
   }
   var order5 ={
     Shot_in_the_Dark: this.Shot_in_the_Dark,
     numof_SITD: this.number5
   }

   var order6 ={
     Cafe_Au_Lait: this.Cafe_Au_Lait,
     numof_CAL: this.number6
   }


    if(this.mocha != null && this.number != null){
    this.list('cups').push(order)
      }
    if(this.Capitol_Street_Latte != null && this.number2 != null){
       this.list('cups').push(order2)
     }
    if(this.Blondie_Latte != null && this.number3 != null){
        this.list('cups').push(order3)
    }
    if(this.Drip_Coffee != null && this.number4 != null){
        this.list('cups').push(order4)
    }
    if(this.Shot_in_the_Dark != null && this.number5 != null){
        this.list('cups').push(order5)
    }
    if(this.Blondie_Latte != null && this.number6 != null){
        this.list('cups').push(order6)
    }
    
  }
   data(order){
    var mocha = order.val()
    var numof_mocha = Object.keys(mocha);
    console.log(mocha, numof_mocha);
    for (var i =0; i < mocha.length; i++){
      var k = numof_mocha[i];
      var n = this.list('n') + ': ' + n.parent('order');
    }
  }



}
