import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KidsService} from '../../../Services/kids.service';
import {Kid} from '../../../models/kid';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-kids',
  templateUrl: './all-kids.component.html',
  styleUrls: ['./all-kids.component.css']
})
export class AllKidsComponent implements OnInit {
  kids: Kid[] = [];
  selectedKid: Kid;
  selectSort: String;

  constructor(
    private kid: KidsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.kid.getAllKids().subscribe(kidss => {
      this.kids = kidss;
    });
  }

  changeKid(chooseKid: Kid) {
    this.selectedKid = chooseKid;
    localStorage.setItem('selectedKid', JSON.stringify(this.selectedKid));
    this.router.navigateByUrl('/admin/changeKid');
  }

  sortedBy() {
    if (this.selectSort === 'ABC') {
      this.kids = this.kids.sort((a, b) => {
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
      this.kids = this.kids.sort(function(a, b) {
        return (+a.age) - (+b.age);
      });
    }
  }


  deleteKid(chooseKid: Kid) {
    this.selectedKid = chooseKid;
    this.kid.deleteKids(this.selectedKid.id).subscribe(() => {

    });
  }

}
