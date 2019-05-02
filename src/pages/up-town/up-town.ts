import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the UpTownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-up-town',
  templateUrl: 'up-town.html',
})
export class UpTownPage {

  number;
  number2;
  number3;
  number4;
  number5;
  number6;
  Espresso;
  Americano;
  Caramel_Macchiato;
  Cinnamon_Rolls;
  Muffins;
  Rice_Krispy_Treats;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fdb: AngularFireDatabase) {

  	console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpTownPage');
  }

 sendItem(title: string, body: string){

   var order = {
     Espresso: this.Espresso,
     numof_Espresso: this.number
   }

   var order2 ={
     Latte: this.Americano,
     numof_Latte : this.number2
   }

   var order3 ={
     Mocha_Bianca: this.Caramel_Macchiato,
     numof_MB: this.number3
   }

   var order4 ={
     Cinnamon_Rolls: this.Cinnamon_Rolls,
     numof_CR: this.number4
   }
   var order5 ={
     Cream_Cheese_Danish: this.Muffins,
     numof_CCD: this.number5
   }

   var order6 ={
     Handmade_Parfait: this.Rice_Krispy_Treats,
     numof_HP: this.number6
   }

    if(this.Espresso != null && this.number != null){
    this.fdb.list('up-town').push(order)
      }
    if(this.Americano != null && this.number2 != null) {
       this.fdb.list('up-town').push(order2)
     }
    if(this.Caramel_Macchiato != null && this.number3 != null){
        this.fdb.list('up-town').push(order3)
    }
    if(this.Cinnamon_Rolls != null && this.number4 != null) {
        this.fdb.list('up-town').push(order4)
    }
    if(this.Muffins != null && this.number5 != null){
        this.fdb.list('up-townt').push(order5)
    }
    if(this.Rice_Krispy_Treats != null && this.number6 != null) {
        this.fdb.list('up-town').push(order6)
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
