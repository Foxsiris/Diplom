import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../models/news';
import {Kid} from '../models/kid';
import {Registration_for_the_excursion} from '../models/registration_for_the_excursion';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getAllNews() {
    return this.http.get<News[]>('http://localhost:3000/allNews');
  }
  getLatestNews() {
    return this.http.get<News[]>('http://localhost:3000/latestNews');
  }
  addNews(title:string,description:string,date:string,img_url:string){
    return this.http.post<News[]>('http://localhost:3000/addNews',
      {
        title,
        description,
        date,
        img_url,
      }
    );
  }
  updateNews(title:string,description:string,date:string,img_url:string,id:number){
    return this.http.post<News[]>('http://localhost:3000/updateNew',{
      title,
      description,
      date,
      img_url,
      id
    })
  }
  deleteNews(id:number){
    return this.http.post<Registration_for_the_excursion[]>('http://localhost:3000/deleteNew',{id})
  }

}
