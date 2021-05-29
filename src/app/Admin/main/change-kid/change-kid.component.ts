import { Component, OnInit } from '@angular/core';
import {Kid} from '../../../models/kid';
import {KidsService} from '../../../Services/kids.service';

@Component({
  selector: 'app-change-kid',
  templateUrl: './change-kid.component.html',
  styleUrls: ['./change-kid.component.css']
})
export class ChangeKidComponent implements OnInit {
  id:number
  name: string;
  surname: string;
  middle_name: string;
  age: string;
  status: string;
  gender:string;
  nowAge:number;

  nameParent: string;
  surnameParent: string;
  middle_nameParent: string;
  ageParent: string;
  genderParent:string;
  nowAgeParent:number;
  phoneParent:string;
  selectedKid:Kid

  constructor(private kid: KidsService) {
  }

  ngOnInit(): void {
    this.selectedKid =JSON.parse(localStorage.getItem('selectedKid'))
    this.name = this.selectedKid.name
    this.surname = this.selectedKid.surname
    this.middle_name = this.selectedKid.middle_name
    this.age = this.selectedKid.age
    this.gender = this.selectedKid.gender
    this.status = this.selectedKid.status
    this.nameParent = this.selectedKid.nameParent
    this.surnameParent = this.selectedKid.surnameParent
    this.middle_nameParent = this.selectedKid.middle_nameParent
    this.ageParent = this.selectedKid.ageParent
    this.genderParent = this.selectedKid.genderParent
    this.phoneParent = this.selectedKid.phoneParent
    this.id = this.selectedKid.id
    console.log(this.selectedKid)

    localStorage.removeItem('selectedKid')
  }
  get_current_age(date:string) {
    // @ts-ignore
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
  }

  changeKids() {
    this.nowAge = this.get_current_age(this.age)
    this.nowAgeParent = this.get_current_age(this.ageParent)
    this.kid.updateKids(this.name, this.surname, this.middle_name, this.nowAge, 'full',  this.gender,this.nameParent, this.surnameParent, this.middle_nameParent, this.nowAgeParent,  this.genderParent,this.phoneParent,this.id).subscribe(() => {

    });

  }
}
