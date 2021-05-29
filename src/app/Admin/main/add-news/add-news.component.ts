import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../../Services/news.service';
import {News} from '../../../models/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
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
    this.date = this.selectedNews.date
    localStorage.removeItem('selectedNews')
  }
  selectFiles(event) {
    this.img_url = event.target.files;
    for(let i=0;i<this.img_url.length;i++){
      this.arrayImg.push(this.img_url[i].name)
    }
    this.finalUrlImg = this.arrayImg.join(",")
  }

  addNews() {

    this.news.addNews(this.title, this.description, this.date, this.finalUrlImg).subscribe(() => {
      this.title = '';
      this.description = '';
    });
  }

}
