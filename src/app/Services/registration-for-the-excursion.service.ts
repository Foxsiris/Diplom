import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Registration_for_the_excursion} from '../models/registration_for_the_excursion';

@Injectable({
  providedIn: 'root'
})
export class RegistrationForTheExcursionService {

  constructor(private http: HttpClient) {
  }

  allRegistrationForTheExcursion() {
    return this.http.get<Registration_for_the_excursion[]>('http://localhost:3000/allRegistration');
  }

  addRegistrationForTheExcursion(name: string, email: string, phone_number: string) {
    return this.http.post<Registration_for_the_excursion[]>('http://localhost:3000/addRegistration', {name, email, phone_number});
  }
  deleteRegistrationForTheExcursion(id:number){
    return this.http.post<Registration_for_the_excursion[]>('http://localhost:3000/deleteRegistration',{id})
  }
}
