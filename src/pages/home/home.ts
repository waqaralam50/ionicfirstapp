import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { AboutusPage } from '../aboutus/aboutus';

name;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name:String;
password:String;
  constructor(public navCtrl: NavController) {
    
  }

  login() {
    // if(this.name=="waqar" && this.password=="cricketer"){
    
    this.navCtrl.push(AboutusPage, { name:this.name,password:this.password })
    // }
    // else{
    //   alert("chal nikal yahan sai");
    // }
    
  }

}

