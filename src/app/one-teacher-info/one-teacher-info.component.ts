import { Component, OnInit } from '@angular/core';
import {Teachers} from '../models/teachers';

@Component({
  selector: 'app-one-teacher-info',
  templateUrl: './one-teacher-info.component.html',
  styleUrls: ['./one-teacher-info.component.css']
})
export class OneTeacherInfoComponent implements OnInit {
  selectedTeacher:Teachers
  name:string;
  surname:string;
  middle_name:string;
  age:string;
  phone:string;
  description:string
  education:string
  dolznost:string
  constructor() { }

  ngOnInit(): void {
    this.selectedTeacher =JSON.parse(localStorage.getItem('selectedTeach'))
    this.name = this.selectedTeacher.name
    this.surname = this.selectedTeacher.surname
    this.middle_name = this.selectedTeacher.middle_name
    this.age = this.selectedTeacher.age
    this.phone = this.selectedTeacher.phone
    this.description = this.selectedTeacher.description
    this.education = this.selectedTeacher.education
    this.dolznost = this.selectedTeacher.dolznost
    console.log(this.selectedTeacher)
  }

}
