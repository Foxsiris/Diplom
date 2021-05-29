import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/news.service';
import {News} from '../models/news';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  showLatestNews:News[]
  selectedNewsMain:News
  constructor(private newsService:NewsService,private router:Router) { }

  ngOnInit(): void {
    this.newsService.getLatestNews().subscribe(latestNews=>{
      this.showLatestNews= latestNews
    })
  }
  openNews(choosenNews:News){
    this.selectedNewsMain= choosenNews
    localStorage.setItem('selectedNewsMain',JSON.stringify(this.selectedNewsMain))
    this.router.navigateByUrl('/oneNews')

  }
}
