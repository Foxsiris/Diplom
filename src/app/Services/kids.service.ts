import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Kid} from '../models/kid';
import {Registration_for_the_excursion} from '../models/registration_for_the_excursion';
import {Parent} from '../models/parent';

@Injectable({
  providedIn: 'root'
})
export class KidsService {
  constructor(private http: HttpClient) {
  }

  getAllKids() {
    return this.http.get<Kid[]>('http://localhost:3000/allKids');
  }

  addKids(name: string, surname: string, middle_name: string, age: number, status: string, gender:string,nameParent:string,surnameParent:string,middle_nameParent:string,ageParent:number,genderParent:string,phoneParent:string) {
    return this.http.post<Kid[]>('http://localhost:3000/addKids',
      {
        name,
        surname,
        middle_name,
        age,
        status,
        gender,
        nameParent,
        surnameParent,
        middle_nameParent,
        ageParent,
        genderParent,
        phoneParent
      }
    );
  }
  updateKids(name: string, surname: string, middle_name: string, age: number, status: string, gender:string,nameParent:string,surnameParent:string,middle_nameParent:string,ageParent:number,genderParent:string,phoneParent:string,id:number) {
    return this.http.post<Kid[]>('http://localhost:3000/updateKid',
      {
        name,
        surname,
        middle_name,
        age,
        status,
        gender,
        nameParent,
        surnameParent,
        middle_nameParent,
        ageParent,
        genderParent,
        phoneParent,
        id
      }
    );
  }


  deleteKids(id:number){
    return this.http.post<Registration_for_the_excursion[]>('http://localhost:3000/deleteKid',{id})
  }
}
