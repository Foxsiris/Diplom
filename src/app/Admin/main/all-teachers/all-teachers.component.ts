import {Component, OnInit} from '@angular/core';
import {TeachersService} from '../../../Services/teachers.service';
import {Teachers} from '../../../models/teachers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent implements OnInit {
  allTeachers: Teachers[];
  selectedTeacher: Teachers;
  selectSort: String;

  constructor(private teachersService: TeachersService, private router: Router) {
  }

  ngOnInit(): void {
    this.teachersService.getAllTeachers().subscribe(teachersAll => {
      this.allTeachers = teachersAll;
    });
  }

  changeTeachers(choosenTeacher: Teachers) {
    this.selectedTeacher = choosenTeacher;
    localStorage.setItem('selectedTeacher',JSON.stringify(this.selectedTeacher))
    this.router.navigateByUrl('/admin/changeTeachers')

  }

  deleteTeachers(choosenTeacher: Teachers) {
    this.selectedTeacher = choosenTeacher;
    this.teachersService.deleteTeachers(this.selectedTeacher.id).subscribe(() => {

    });
  }
  sortedBy() {
    if (this.selectSort === 'ABC') {
      this.allTeachers = this.allTeachers.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (this.selectSort === 'AGE') {
      this.allTeachers = this.allTeachers.sort(function(a, b) {
        return (+a.age) - (+b.age);
      });
    }
  }
}
