import { Component, OnInit } from '@angular/core';
import {RegistrationForTheExcursionService} from '../../Services/registration-for-the-excursion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  autorizationPerson:any
  disabledMenu:boolean = false
  constructor() { }

  ngOnInit(): void {
    this.autorizationPerson =JSON.parse(localStorage.getItem('autorizationPerson'))
    if (this.autorizationPerson.role==='teacher'){
      this.disabledMenu = true
    }
    if (this.autorizationPerson.role==='parent'){
      this.disabledMenu = true
    }
    if (this.autorizationPerson.role==='admin'){
      this.disabledMenu = false
    }

  }

}
