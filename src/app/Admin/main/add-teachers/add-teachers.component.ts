import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../../../Services/teachers.service';
import {Teachers} from '../../../models/teachers';

@Component({
  selector: 'app-add-teachers',
  templateUrl: './add-teachers.component.html',
  styleUrls: ['./add-teachers.component.css']
})
export class AddTeachersComponent implements OnInit {
  name:string;
  surname:string;
  middle_name:string;
  age:string;
  phone:string;
  description:string
  education:string
  dolznost:string
  nowAge:number
  selectedTeacher:Teachers
  constructor(private teachersService:TeachersService) { }

  ngOnInit(): void {
    this.selectedTeacher = JSON.parse(localStorage.getItem('selectedTeacher'))
    this.name = this.selectedTeacher.name
    this.surname = this.selectedTeacher.surname
    this.middle_name = this.selectedTeacher.middle_name
    this.age = this.selectedTeacher.age
    this.description = this.selectedTeacher.description
    this.education = this.selectedTeacher.education
    this.dolznost = this.selectedTeacher.dolznost
    this.phone = this.selectedTeacher.phone
    localStorage.removeItem('selectedTeacher')
  }
  get_current_age(date:string) {
    // @ts-ignore
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
  }

  addTeachers(){
    this.nowAge = this.get_current_age(this.age)
    this.teachersService.addTeachers(this.name,this.surname,this.middle_name,this.nowAge,this.phone,this.description,this.education,this.dolznost).subscribe(()=>{

    })

  }
}
