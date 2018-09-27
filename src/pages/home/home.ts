import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { AboutusPage } from '../aboutus/aboutus';
import { StudentPage } from '../student/student';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name:String;
password:String;
who:string;
  constructor(public navCtrl: NavController) {
    
  }

  login() {
    if(this.name=="waqar" && this.password=="cricketer" && this.who=="Teacher"){
   
   
    this.navCtrl.push(AboutusPage, { name:this.name,password:this.password })
   
   
    }
    else{
      alert("chal nikal yahan sai");
    }
    
    
  }

  loginstudent() {
    if (this.name == "waqar" && this.password == "cricketer" && this.who == "Student") {


      this.navCtrl.push(StudentPage, { name: this.name, password: this.password })


    }
    else {
      alert("chal nikal yahan sai");
    }
}
}
