import { Component, OnInit } from '@angular/core';
import {News} from '../../models/news';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.css']
})
export class OneNewsComponent implements OnInit {
  selectedNewsMain:News
  title:string;
  description:string;
  date:string;
  img_url:string;
  arrayImg:string[]=[]
  allImg:string[]=[]
  constructor() { }

  ngOnInit(): void {
    this.selectedNewsMain = JSON.parse(localStorage.getItem('selectedNewsMain'))
    this.title = this.selectedNewsMain.title
    this.description = this.selectedNewsMain.description
    this.date = this.selectedNewsMain.date
    this.img_url = this.selectedNewsMain.img_url
    this.arrayImg = this.img_url.split(',')
    for(let i=1;i<this.arrayImg.length;i++){
      this.allImg.push(this.arrayImg[i])
    }
    console.log(this.allImg)
    localStorage.removeItem('selectedNewsMain')
  }

}
