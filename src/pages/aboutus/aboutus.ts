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
    {Name:"Adil",RollNo:"CS-205",Semester:"6th Semester"},
    { Name: "Waqar", RollNo: "CS-206", Semester: "6th Semester" },
    { Name: "Shahzaib", RollNo: "CS-207", Semester: "6th Semester" },
    { Name: "Rafat", RollNo: "CS-208", Semester: "6th Semester" }
  ]
  Mystudents: Array<any> = [
    { Name: "Tehreem", RollNo: "CS-209", Semester: "6th Semester" },
    { Name: "Rubina", RollNo: "CS-210", Semester: "6th Semester" },
    { Name: "Maryam", RollNo: "CS-211", Semester: "6th Semester" },
    { Name: "Ash", RollNo: "CS-212", Semester: "6th Semester" }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    
    
  
  }

  ionViewDidLoad() {
    this.password=this.navParams.get('password');
    this.name=this.navParams.get('name');
    console.log('ionViewDidLoad AboutusPage');
  }

}
