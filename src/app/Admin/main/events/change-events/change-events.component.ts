import { Component, OnInit } from '@angular/core';
import {News} from '../../../../models/news';
import {NewsService} from '../../../../Services/news.service';
import {EvetnsService} from '../../../../Services/evetns.service';
import {Events} from '../../../../models/events';

@Component({
  selector: 'app-change-events',
  templateUrl: './change-events.component.html',
  styleUrls: ['./change-events.component.css']
})
export class ChangeEventsComponent implements OnInit {
  id:number
  title: string;
  description: string;
  date: string;
  img_url: any;
  selectedEvents:Events
  arrayImg:any[] = []
  finalUrlImg :string
  constructor(private events: EvetnsService) {
  }

  ngOnInit(): void {
    this.selectedEvents =JSON.parse(localStorage.getItem('selectedEvents'))
    this.title = this.selectedEvents.title
    this.description = this.selectedEvents.description
    this.date = this.selectedEvents.date
    this.img_url = this.selectedEvents.img_url
    this.id = this.selectedEvents.id
    localStorage.removeItem('selectedEvents')
  }
  selectFiles(event) {
    this.img_url = event.target.files;
    for(let i=0;i<this.img_url.length;i++){
      this.arrayImg.push(this.img_url[i].name)
    }
    this.finalUrlImg = this.arrayImg.join(",")
  }

  changeNews() {
    this.events.updateEvents(this.title, this.description, this.date, this.finalUrlImg,this.id).subscribe(() => {
      this.title = '';
      this.description = '';
    });
  }
}
