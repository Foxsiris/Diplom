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
  constructor(private groupService:GroupService,private router:Router) { }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(allGroup=>{
      this.allGroupInfo = allGroup
    })
  }
  showSelectedGroup(choosenGroup:Group){
    this.selectedGroup = choosenGroup
    localStorage.setItem('selectedGroup',JSON.stringify(this.selectedGroup))
    this.router.navigateByUrl('/admin/graphikPosehaemosti')
  }

}
