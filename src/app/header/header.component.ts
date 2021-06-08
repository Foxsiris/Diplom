import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  autorizationPerson:any
  disabledMenu:boolean = true
  disabledEnter:boolean = false
  constructor() { }

  ngOnInit(): void {
    this.autorizationPerson =JSON.parse(localStorage.getItem('autorizationPerson'))
    if(this.autorizationPerson === null){
      this.disabledMenu = true
      this.disabledEnter = false
    }else {
      if (this.autorizationPerson.role==='parent'){
        this.disabledMenu = false
        this.disabledEnter = true
      }
    }


  }

}
