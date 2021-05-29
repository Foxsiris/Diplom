import { Component, OnInit } from '@angular/core';
import {News} from '../../../../models/news';
import {NewsService} from '../../../../Services/news.service';
import {Router} from '@angular/router';
import { Events } from 'src/app/models/events';
import {EvetnsService} from '../../../../Services/evetns.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  allEvents: Events[];
  selectedEvents:Events
  workImgUrl:string
  constructor(private eventsService: EvetnsService,private router:Router) {
  }

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe(events => {
      this.allEvents = events;
    });
  }

  changeNews(chooseEvents:Events){
    this.selectedEvents = chooseEvents
    localStorage.setItem('selectedEvents',JSON.stringify(this.selectedEvents))
    this.router.navigateByUrl('/admin/changeEvent')
  }

  deleteNews(chooseEvents:Events){
    this.selectedEvents = chooseEvents
    this.eventsService.deleteEvents(this.selectedEvents.id).subscribe(()=>{

    })
  }
}
