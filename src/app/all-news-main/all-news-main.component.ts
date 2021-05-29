import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import {NewsService} from '../Services/news.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-all-news-main',
  templateUrl: './all-news-main.component.html',
  styleUrls: ['./all-news-main.component.css']
})
export class AllNewsMainComponent implements OnInit {
  allNews:News[]
  selectedNews:News
  constructor(private newsService:NewsService,private router:Router) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((news)=>{
      this.allNews = news
    })
  }
  showNews(choosenNews:News){
    this.selectedNews = choosenNews
    localStorage.setItem('selectedNewsMain',JSON.stringify(this.selectedNews))
    this.router.navigateByUrl('/oneNews')
  }
}
