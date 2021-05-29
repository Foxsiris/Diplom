import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Group} from '../models/group';
import {Kid} from '../models/kid';
import {SickKid} from '../models/sickKid';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }

  addGroup(title:string,id_kids:string,id_teacher:number){
    this.http.post('http://localhost:3000/addGroup',{title,id_kids,id_teacher}).subscribe(()=>{

    })
  }
  getAllGroups(){
    return this.http.get<Group[]>('http://localhost:3000/allGroup')
  }
  getAllSickKid(GroupName:string){
    return this.http.get<SickKid[]>(`http://localhost:3000/allSickList/${GroupName}`)
  }
  addSickKid(fullName:string,date:string,month:string,GroupName:string){
    this.http.post('http://localhost:3000/addSikcKid',{fullName,date,month,GroupName}).subscribe(()=>{

    })
  }
  getKidsChoosenForGroup(id_kid:string){
      return this.http.get<Kid[]>(`http://localhost:3000/getKidsChoosenForGroup/${id_kid}`)
  }
  changeGroupNameStatus(id_kid:string,title:string){
    return this.http.post('http://localhost:3000/changeStatus',{id_kid,title}).subscribe(()=>{

    })
  }

}
