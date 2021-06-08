import {Component, OnInit} from '@angular/core';
import {Teachers} from '../../../models/teachers';
import {TeachersService} from '../../../Services/teachers.service';
import {Kid} from '../../../models/kid';
import {KidsService} from '../../../Services/kids.service';
import {GroupService} from '../../../Services/group.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  allTeachers: Teachers[];
  allKids:Kid[]
  idKids = []
  choosenKids = []
  title:string
  selectedTeache:string

  constructor(private teachersService: TeachersService,private kidService:KidsService,private groupService:GroupService) {

  }

  ngOnInit(): void {
    this.teachersService.getAllTeachers().subscribe(teachersAll => {
      this.allTeachers = teachersAll;
    });
    this.kidService.getAllKids().subscribe(kidsAll=>{
      this.allKids = kidsAll.filter(el=>{
        return el.group_name ==='' || el.group_name ===' '
      })
      console.log(this.allKids)

      this.allKids.forEach(el=>{
        this.choosenKids.push({el,cheked:false})
      })
    })
  }


  btnCl(){
    this.choosenKids.forEach(el=>{
      if (el.cheked){
        this.idKids.push(el.el.id)
      }
    })
    this.groupService.addGroup(this.title,this.idKids.join(','),+this.selectedTeache)
    this.groupService.changeGroupNameStatus(this.idKids.join(','),this.title)
  }
}
