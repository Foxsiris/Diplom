import { Component, OnInit } from '@angular/core';
import {Teachers} from '../models/teachers';
import {TeachersService} from '../Services/teachers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-teachers-main',
  templateUrl: './all-teachers-main.component.html',
  styleUrls: ['./all-teachers-main.component.css']
})
export class AllTeachersMainComponent implements OnInit {
  allTeacher:Teachers[]
  selectedTeacher:Teachers
  constructor(private teacherService:TeachersService, private router: Router) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(teacherAll=>{
      this.allTeacher = teacherAll
    })
  }

  chosenTeacher(choosenTeacher:Teachers){
    this.selectedTeacher = choosenTeacher
    localStorage.setItem('selectedTeach', JSON.stringify(this.selectedTeacher));
    this.router.navigateByUrl('/oneTeacher');
  }

}
