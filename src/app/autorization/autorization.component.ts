import {Component, OnInit} from '@angular/core';
import {KidsService} from '../Services/kids.service';
import {TeachersService} from '../Services/teachers.service';
import {Kid} from '../models/kid';
import {Teachers} from '../models/teachers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css']
})
export class AutorizationComponent implements OnInit {
  login: string;
  password: string;
  data: any[] = [{'login':'admin','password':'123','role':'admin'},];
  autorizationPerson:any

  constructor(private kids: KidsService, private teachers: TeachersService,private router:Router) {
  }

  ngOnInit(): void {
    this.kids.getAllKids().subscribe(kidsAll=>{
       kidsAll.forEach(el=>{
        this.data.push(el)
      })
    })
    this.teachers.getAllTeachers().subscribe(teachersAll=>{
      teachersAll.forEach(el=>{
        this.data.push(el)
      })
    })

  }

  autorization(): void {
    this.data.forEach(el=>{
      if (this.login === el.login && this.password === el.password){
        this.autorizationPerson = el
        localStorage.setItem('autorizationPerson',JSON.stringify(this.autorizationPerson))
        if (this.autorizationPerson.role ==='parent'){
          this.router.navigateByUrl('');
        }
        if (this.autorizationPerson.role ==='teacher'){
          this.router.navigateByUrl('/admin');
        }
        if (this.autorizationPerson.role ==='admin'){
          this.router.navigateByUrl('/admin');
        }

      }else{
        console.log('Неверный логин или пароль')
      }
    })
    console.log(this.data)
  }

}
