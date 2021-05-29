import {Component, OnInit} from '@angular/core';
import {KidsService} from '../Services/kids.service';
import {Kid} from '../models/kid';
import {GroupService} from '../Services/group.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {
  allInfo: Kid[];
  onePeople:Kid
  constructor(private kidsService: KidsService,private groupService:GroupService) {
  }

  ngOnInit(): void {
    this.kidsService.getAllKids().subscribe(kidsAll => {
      this.allInfo = kidsAll;
      this.onePeople = this.allInfo[0]
      console.log(this.onePeople)
    });
  }
  addSickKid(){
    let fullName:string = `${this.onePeople.name} ${this.onePeople.surname} ${this.onePeople.middle_name}`
    this.groupService.addSickKid(fullName,'27','Май',this.onePeople.group_name)
  }


}
