import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {
 
name:string;
  password: string;
  Students:Array<any>=[
    { Name: "Adil", marks: "30" },
    { Name: "Waqar", marks: "30" },
    { Name: "Shahzaib", marks: "30" },
    { Name: "Rafat", marks: "30" }
  ]
 
  constructor(public navCtrl: NavController, public navParams: NavParams){}
  ionViewDidLoad() {
    this.password=this.navParams.get('password');
    this.name=this.navParams.get('name');
    console.log('ionViewDidLoad AboutusPage');
  }

}
