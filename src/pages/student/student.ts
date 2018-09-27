import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  name: string;
  password: string;
  Students: Array<any> = [
    { Name: "Adil" },
    { Name: "Waqar"},
    { Name: "Shahzaib"},
    { Name: "Rafat"}
  ]

 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  ionViewDidLoad() {
    this.password = this.navParams.get('password');
    this.name = this.navParams.get('name');
    console.log('ionViewDidLoad AboutusPage');
  }

}