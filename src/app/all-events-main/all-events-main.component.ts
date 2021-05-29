import { Component, OnInit } from '@angular/core';
import {News} from '../models/news';
import {NewsService} from '../Services/news.service';
import {Router} from '@angular/router';
import {EvetnsService} from '../Services/evetns.service';
import { Events } from '../models/events';

@Component({
  selector: 'app-all-events-main',
  templateUrl: './all-events-main.component.html',
  styleUrls: ['./all-events-main.component.css']
})
export class AllEventsMainComponent implements OnInit {
  allEvents:Events[]
  selectedNews:News
  constructor(private eventServise:EvetnsService,private router:Router) { }

  ngOnInit(): void {
    this.eventServise.getAllEvents().subscribe((eventsAll)=>{
      this.allEvents = eventsAll
    })
  }
  showNews(choosenNews:News){
    this.selectedNews = choosenNews
    localStorage.setItem('selectedNewsMain',JSON.stringify(this.selectedNews))
    this.router.navigateByUrl('/oneNews')

  }

}
