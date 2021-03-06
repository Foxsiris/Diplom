import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teachers} from '../models/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) {
  }

  getAllTeachers() {
    return this.http.get<Teachers[]>('http://localhost:3000/allTeachers');
  }

  addTeachers(name: string, surname: string, middle_name: string, age: number, phone: string,description:string,education:string,dolznost:string) {
    return this.http.post('http://localhost:3000/addTeachers', {name, surname, middle_name, age, phone,description,education,dolznost});
  }
  updateTeachers(name: string, surname: string, middle_name: string, age: number, phone: string,description:string,education:string,dolznost:string,id:number){
      return this.http.post('http://localhost:3000/updateTeachers',{name,surname,middle_name,age,phone,description,education,dolznost,id})
  }
  getSelectedTeacher(id:string){
    return this.http.get<Teachers>(`http://localhost:3000/getSelectedTeacher/${id}`)
  }
  deleteTeachers(id:number){
    return this.http.post('http://localhost:3000/deleteTeachers',{id})
  }
}
