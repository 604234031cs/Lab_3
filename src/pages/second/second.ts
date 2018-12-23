import { ThirdPage } from './../third/third';
import { FirstPage } from './../first/first';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Backtofirst(){
    this.navCtrl.push(FirstPage);
  }
  GOTOThirdpage(){
    this.navCtrl.push(ThirdPage);
  }

}
