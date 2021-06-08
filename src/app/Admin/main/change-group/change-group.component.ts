import { Component, OnInit } from '@angular/core';
import {Teachers} from '../../../models/teachers';
import {Kid} from '../../../models/kid';
import {TeachersService} from '../../../Services/teachers.service';
import {KidsService} from '../../../Services/kids.service';
import {GroupService} from '../../../Services/group.service';

@Component({
  selector: 'app-change-group',
  templateUrl: './change-group.component.html',
  styleUrls: ['./change-group.component.css']
})
export class ChangeGroupComponent implements OnInit {
  allTeachers: Teachers[];
  allKids:Kid[]
  allKidsTwo:Kid[]
  idKids = []
  choosenKidsInGroup = []
  choosenKidsWithOutGroup = []
  title:string
  selectedTeache:string
  selectedGroup:any

  constructor(private teachersService: TeachersService,private kidService:KidsService,private groupService:GroupService) {

  }

  ngOnInit(): void {
    this.selectedGroup =JSON.parse(localStorage.getItem('selectedGroup'))
    this.title = this.selectedGroup.title
    this.teachersService.getAllTeachers().subscribe(teachersAll => {
      this.allTeachers = teachersAll;
    });
    this.kidService.getAllKids().subscribe(kidsAll=>{
      this.allKids = kidsAll.filter(el=>{
        return el.group_name ===this.selectedGroup.title
      })
      this.allKidsTwo = kidsAll.filter(el=>{
        return el.group_name ==='' ||el.group_name ===' '
      })
      this.allKidsTwo.forEach(el=>{
        this.choosenKidsWithOutGroup.push({el,cheked:false})
      })
      this.allKids.forEach(el=>{
        this.choosenKidsInGroup.push({el,cheked:false})
      })
    })
  }


  btnCl(){
    this.choosenKidsInGroup.forEach(el=>{
      if (el.cheked){
        this.idKids.push(el.el.id)
      }else {
        this.groupService.changeGroupNameStatusWithDelete(el.el.id,'')
      }
    })
    this.choosenKidsWithOutGroup.forEach(el=>{
      if (el.cheked){
        this.idKids.push(el.el.id)
      }else {
        this.groupService.changeGroupNameStatusWithDelete(el.el.id,'')
      }
    })
    this.groupService.updateGroup(this.title,this.idKids.join(','),+this.selectedTeache,this.selectedGroup.id)
    this.groupService.changeGroupNameStatus(this.idKids.join(','),this.title)
  }

}
