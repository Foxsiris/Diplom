import {Component, OnInit} from '@angular/core';
import {KidsService} from '../Services/kids.service';
import {Kid} from '../models/kid';
import {GroupService} from '../Services/group.service';
import {Router} from '@angular/router';
import {Group} from '../models/group';
import {TeachersService} from '../Services/teachers.service';
import {Teachers} from '../models/teachers';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {

  onePeople: any;
  groups: Group[] = [];
  oneTeacher: Teachers;
  teachers: Teachers[];
  idTeacher: any;

  constructor(private kidsService: KidsService, private groupService: GroupService, private route: Router, private teacherService: TeachersService) {
  }

  ngOnInit(): void {
    this.onePeople = JSON.parse(localStorage.getItem('autorizationPerson'));
    this.groupService.getAllGroups().subscribe(el => {
      this.groups = el;
    });
    this.teacherService.getAllTeachers().subscribe(el => {
      this.teachers = el;
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].title === this.onePeople.group_name) {
          this.idTeacher = this.groups[i].id_teacher;
        }
      }
      this.teacherService.getSelectedTeacher(this.idTeacher).subscribe((el) => {
        this.oneTeacher = el;

      });
    });



  }

  addSickKid() {
    let fullName: string = `${this.onePeople.name} ${this.onePeople.surname} ${this.onePeople.middle_name}`;
    this.groupService.addSickKid(fullName, '3', 'Июнь', this.onePeople.group_name, this.onePeople.id);
  }
  showTeacher(){
    localStorage.setItem('selectedTeach', JSON.stringify(this.oneTeacher));
    this.route.navigateByUrl('/oneTeacher');
  }

  exitArea() {
    localStorage.removeItem('autorizationPerson');
    this.route.navigateByUrl('/');
  }

}
