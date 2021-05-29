import {Component, OnInit} from '@angular/core';
import {Kid} from 'src/app/models/kid';
import {KidsService} from '../../../Services/kids.service';
import {GroupService} from '../../../Services/group.service';
import {Group} from '../../../models/group';
import {Teachers} from '../../../models/teachers';
import {TeachersService} from '../../../Services/teachers.service';
import {SickKid} from '../../../models/sickKid';

@Component({
  selector: 'app-graphik-posehaemosti',
  templateUrl: './graphik-posehaemosti.component.html',
  styleUrls: ['./graphik-posehaemosti.component.css']
})
export class GraphikPosehaemostiComponent implements OnInit {

  allKids: Kid[];
  allGroups: Group[];
  allSickKids: SickKid[];
  choosenGroup: Group;
  teacher: Teachers;
  date = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  bolnya: Kid;
  dateBolyn: string;

  constructor(private kidService: KidsService, private groupService: GroupService, private teacherService: TeachersService) {
  }

  ngOnInit(): void {
    this.choosenGroup = JSON.parse(localStorage.getItem('selectedGroup'));
    localStorage.removeItem('selectedGroup');
    this.teacherService.getSelectedTeacher(this.choosenGroup.id_teacher).subscribe(selectedTeacher => {
      this.teacher = selectedTeacher;
    });
    this.groupService.getKidsChoosenForGroup(this.choosenGroup.id_kid).subscribe(kidsAll => {
      this.allKids = kidsAll.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    });
    this.groupService.getAllSickKid(this.choosenGroup.title).subscribe(sickKidsAll => {
      this.allSickKids = sickKidsAll;
    });
  }

  checkBolya(chosenKid, choosenDate) {
    this.bolnya = chosenKid;
    this.dateBolyn = choosenDate;
    let fullName: string = `${this.bolnya.name} ${this.bolnya.surname} ${this.bolnya.middle_name}`;
    this.groupService.addSickKid(fullName, this.dateBolyn, 'Май', this.choosenGroup.title);
  }


}
