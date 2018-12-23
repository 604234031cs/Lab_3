import { SecondPage } from './../second/second';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotosecond(){
    this.navCtrl.push(SecondPage);

  }

}
