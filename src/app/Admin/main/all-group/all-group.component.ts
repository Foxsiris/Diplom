import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../../Services/group.service';
import {Group} from '../../../models/group';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-all-group',
  templateUrl: './all-group.component.html',
  styleUrls: ['./all-group.component.css']
})
export class AllGroupComponent implements OnInit {
  allGroupInfo:Group[]
  selectedGroup:Group
  autorizationPerson:any
  disabledMenu:boolean = false
  constructor(private groupService:GroupService,private router:Router) { }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(allGroup=>{
      this.allGroupInfo = allGroup
    })
    this.autorizationPerson =JSON.parse(localStorage.getItem('autorizationPerson'))
    if (this.autorizationPerson.role==='teacher'){
      this.disabledMenu = true
    }
    if (this.autorizationPerson.role==='admin'){
      this.disabledMenu = false
    }
  }
  showSelectedGroup(choosenGroup:Group){
    this.selectedGroup = choosenGroup
    localStorage.setItem('selectedGroup',JSON.stringify(this.selectedGroup))
    this.router.navigateByUrl('/admin/graphikPosehaemosti')
  }
  changeGroup(choosenGroup:Group){
    this.selectedGroup = choosenGroup
    localStorage.setItem('selectedGroup',JSON.stringify(this.selectedGroup))
    this.router.navigateByUrl('/admin/changeGroup')
  }
  deleteGroup(choosenGroup:Group){
    this.groupService.deletGroup(choosenGroup.id)
    this.groupService.changeGroupNameStatusWithDelete(choosenGroup.id_kid," ")
  }

}
