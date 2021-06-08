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
  updateGroup(title:string,id_kid:string,id_teacher:number,id:number){
    this.http.post('http://localhost:3000/updateGroup',{title,id_kid,id_teacher,id}).subscribe(()=>{

    })
  }
  getAllGroups(){
    return this.http.get<Group[]>('http://localhost:3000/allGroup')
  }
  getAllSickKid(GroupName:string){
    return this.http.get<SickKid[]>(`http://localhost:3000/allSickList/${GroupName}`)
  }
  addSickKid(fullName:string,date:string,month:string,GroupName:string,id_kid:number){
    this.http.post('http://localhost:3000/addSikcKid',{fullName,date,month,GroupName,id_kid}).subscribe(()=>{

    })
  }
  deleteSickKid(id_kid:number,date:string){
    this.http.post('http://localhost:3000/deleteSickKid',{id_kid,date}).subscribe(()=>{

    })
  }
  getKidsChoosenForGroup(id_kid:string){
      return this.http.get<Kid[]>(`http://localhost:3000/getKidsChoosenForGroup/${id_kid}`)
  }
  changeGroupNameStatus(id_kid:string,title:string){
    return this.http.post('http://localhost:3000/changeStatus',{id_kid,title}).subscribe(()=>{

    })
  }
  changeGroupNameStatusWithDelete(id_kid:string,title:string){
    return this.http.post('http://localhost:3000/changeStatusWithDelete',{id_kid,title}).subscribe(()=>{

    })
  }
  deletGroup(id:number){
    return this.http.post('http://localhost:3000/deleteGroup',{id}).subscribe(()=>{

    })
  }

}
