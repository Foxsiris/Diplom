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

  addTeachers(name: string, surname: string, middle_name: string, age: number, phone: string) {
    return this.http.post('http://localhost:3000/addTeachers', {name, surname, middle_name, age, phone});
  }
  updateTeachers(name: string, surname: string, middle_name: string, age: number, phone: string,id:number){
      return this.http.post('http://localhost:3000/updateTeachers',{name,surname,middle_name,age,phone,id})
  }
  getSelectedTeacher(id:string){
    return this.http.get<Teachers>(`http://localhost:3000/getSelectedTeacher/${id}`)
  }
  deleteTeachers(id:number){
    return this.http.post('http://localhost:3000/deleteTeachers',{id})
  }
}
