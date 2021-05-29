import {Component, OnInit} from '@angular/core';
import {News} from '../../../models/news';
import {NewsService} from '../../../Services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  allNews: News[];
  selectedNews:News
  workImgUrl:string
  constructor(private newsService: NewsService,private router:Router) {
  }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(news => {
      this.allNews = news;
    });
  }

  changeNews(chooseNews:News){
    this.selectedNews = chooseNews
    localStorage.setItem('selectedNews',JSON.stringify(this.selectedNews))
    this.router.navigateByUrl('/admin/changeNews')
  }

  deleteNews(chooseNews:News){
    this.selectedNews = chooseNews
    this.newsService.deleteNews(this.selectedNews.id).subscribe(()=>{
    })
  }

}
