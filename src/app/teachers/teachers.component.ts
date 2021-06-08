import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../Services/teachers.service';
import {Teachers} from '../models/teachers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  allTeacher:Teachers[]
  selectedTeaher:Teachers
  constructor(private teachersService:TeachersService) { }

  ngOnInit(): void {
      this.teachersService.getAllTeachers().subscribe(teachersAll=>{
        this.allTeacher = teachersAll
      })
  }
}
