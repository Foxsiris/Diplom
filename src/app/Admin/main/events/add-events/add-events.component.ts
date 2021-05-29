import { Component, OnInit } from '@angular/core';
import {News} from '../../../../models/news';
import {NewsService} from '../../../../Services/news.service';
import {EvetnsService} from '../../../../Services/evetns.service';
import {Events} from '../../../../models/events';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  title: string;
  description: string;
  date: string;
  img_url: any;
  selectedEvent:Events
  arrayImg:any[] = []
  finalUrlImg :string
  constructor(private events: EvetnsService) {
  }

  ngOnInit(): void {
    this.selectedEvent =JSON.parse(localStorage.getItem('selectedEvent'))
    this.title = this.selectedEvent.title
    this.description = this.selectedEvent.description
    this.date = this.selectedEvent.date
    localStorage.removeItem('selectedEvent')
  }
  selectFiles(event) {
    this.img_url = event.target.files;
    for(let i=0;i<this.img_url.length;i++){
      this.arrayImg.push(this.img_url[i].name)
    }
    this.finalUrlImg = this.arrayImg.join(",")
  }

  addNews() {
    this.events.addEvents(this.title, this.description, this.date, this.finalUrlImg).subscribe(() => {
      this.title = '';
      this.description = '';
    });
  }

}
