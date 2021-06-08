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
  allSickKids: SickKid[] =[];
  choosenGroup: Group;
  teacher: Teachers;
  dateOne = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  dateTwo = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  bolnya: Kid;
  dateBolyn: string;
  choosenSikKidsWithStatus: any;

  constructor(private kidService: KidsService, private groupService: GroupService, private teacherService: TeachersService) {
  }

  ngOnInit(): void {
    this.choosenGroup = JSON.parse(localStorage.getItem('selectedGroup'));
    // localStorage.removeItem('selectedGroup');
    this.teacherService.getSelectedTeacher(this.choosenGroup.id_teacher).subscribe(selectedTeacher => {
      this.teacher = selectedTeacher;
    });
    this.groupService.getKidsChoosenForGroup(this.choosenGroup.id_kid).subscribe(kidsAll => {
      this.allKids = kidsAll.sort(function(a, b) {
        if (a.surname < b.surname) {
          return -1;
        }
        if (a.surname > b.surname) {
          return 1;
        }
        return 0;
      });
    });
    this.groupService.getAllSickKid(this.choosenGroup.title).subscribe(sickKidsAll => {
      this.allSickKids = sickKidsAll;
    });

  }

  chk(oneKid: Kid, dat: number) {
    for (let i = 0; i < this.allSickKids.length; i++) {
      if (this.allSickKids[i].id_kid === oneKid.id) {
        this.choosenSikKidsWithStatus = this.allSickKids[i];
        if (dat == this.choosenSikKidsWithStatus.date) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  checkBolya(chosenKid, choosenDate) {
    this.bolnya = chosenKid;
    this.dateBolyn = choosenDate;
    if (this.allSickKids.length === 0) {
      let fullName: string = `${this.bolnya.name} ${this.bolnya.surname} ${this.bolnya.middle_name}`;
      this.groupService.addSickKid(fullName, this.dateBolyn, 'Июнь', this.choosenGroup.title, this.bolnya.id);
      console.log('я добавил 1');
    } else {
      for (let i = 0; i < this.allSickKids.length; i++) {
        if (this.allSickKids[i].id_kid !== this.bolnya.id){
          let fullName: string = `${this.bolnya.name} ${this.bolnya.surname} ${this.bolnya.middle_name}`;
          this.groupService.addSickKid(fullName, this.dateBolyn, 'Июнь', this.choosenGroup.title, this.bolnya.id);
          console.log('я добавил 2', this.allSickKids[i].id_kid,this.bolnya.id);
          continue;
        }
        else {
          this.choosenSikKidsWithStatus = this.allSickKids[i];
          if (this.dateBolyn == this.choosenSikKidsWithStatus.date) {
            this.groupService.deleteSickKid(this.choosenSikKidsWithStatus.id_kid, this.choosenSikKidsWithStatus.date);
            console.log('я удалил 1');
          }else {
            let fullName: string = `${this.bolnya.name} ${this.bolnya.surname} ${this.bolnya.middle_name}`;
            this.groupService.addSickKid(fullName, this.dateBolyn, 'Июнь', this.choosenGroup.title, this.bolnya.id);
            console.log('я добавил 3');
          }
        }

      }
    }
  }


}
