import { Component, OnInit } from '@angular/core';
import {News} from '../../../models/news';
import {NewsService} from '../../../Services/news.service';

@Component({
  selector: 'app-change-news',
  templateUrl: './change-news.component.html',
  styleUrls: ['./change-news.component.css']
})
export class ChangeNewsComponent implements OnInit {
  id:number
  title: string;
  description: string;
  date: string;
  img_url: any;
  selectedNews:News
  arrayImg:any[] = []
  finalUrlImg :string
  constructor(private news: NewsService) {
  }

  ngOnInit(): void {
    this.selectedNews =JSON.parse(localStorage.getItem('selectedNews'))
    this.title = this.selectedNews.title
    this.description = this.selectedNews.description
    this.img_url = this.selectedNews.img_url
    this.date = this.selectedNews.date
    this.id = this.selectedNews.id
    localStorage.removeItem('selectedNews')
  }
  selectFiles(event) {
    this.img_url = event.target.files;
    for(let i=0;i<this.img_url.length;i++){
      this.arrayImg.push(this.img_url[i].name)
    }
    this.finalUrlImg = this.arrayImg.join(",")
  }
  changeNews() {
    this.news.updateNews(this.title, this.description, this.date, this.finalUrlImg,this.id).subscribe(() => {
      this.title = '';
      this.description = '';
      console.log(this.date)
    });
  }

}
