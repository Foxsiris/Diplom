import { Injectable } from '@angular/core';
import {News} from '../models/news';
import {Registration_for_the_excursion} from '../models/registration_for_the_excursion';
import {HttpClient} from '@angular/common/http';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EvetnsService {

  constructor(private http: HttpClient) { }
  getAllEvents() {
    return this.http.get<Events[]>('http://localhost:3000/allEvents');
  }
  getLatestNews() {
    return this.http.get<Events[]>('http://localhost:3000/latestNews');
  }
  addEvents(title:string,description:string,date:string,img_url:string){
    return this.http.post<Events[]>('http://localhost:3000/addEvents',
      {
        title,
        description,
        date,
        img_url,
      }
    );
  }
  updateEvents(title:string,description:string,date:string,img_url:string,id:number){
    return this.http.post<Events[]>('http://localhost:3000/updateEvents',{
      title,
      description,
      date,
      img_url,
      id
    })
  }
  deleteEvents(id:number){
    return this.http.post<Registration_for_the_excursion[]>('http://localhost:3000/deleteEvents',{id})
  }
}
