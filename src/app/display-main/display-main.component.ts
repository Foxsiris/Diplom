import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-main',
  templateUrl: './display-main.component.html',
  styleUrls: ['./display-main.component.css']
})
export class DisplayMainComponent implements OnInit {
  versia:boolean = false
  constructor() { }

  ngOnInit(): void {

  }

  versiaDla(){
    this.versia = !this.versia
  }
}
