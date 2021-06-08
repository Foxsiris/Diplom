import { Component, OnInit } from '@angular/core';
import {Teachers} from '../../models/teachers';
import {TeachersService} from '../../Services/teachers.service';
import {single, threeExample, twoExample} from './Data';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {
  dataTeachers:Teachers[]
  chislo:number
  single:any[]
  twoExample:any[]
  productTwo:any[]
  threeExample:any[]
  viewOne: any[] = [500, 400];
  viewTwo: any[] = [900, 200];
  viewThree: any[] = [500, 350];
  TestObject:any[]
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Name';
  showYAxisLabel = true;
  yAxisLabel = 'Age';

  yAxisLabelTwo: string = 'Год';
  xAxisLabelTwo: string = 'Кол-во';

  legendPosition: string = 'below';


  colorSchemeOne = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  colorSchemeTwo = {
    domain: ['#969bab', '#0f25ea', '#ef0ee4','#25ef0e']
  };
  constructor(private teachersService:TeachersService) {
    let TestObject = [
      {
        'name': 'Всего',
        'value': 90
      },
      {
        'name': 'Детей',
        'value': 86
      },
      {
        'name': 'Родителей',
        'value': 86
      },
      {
        'name': 'Преподователей',
        'value': 4
      },
    ];
    Object.assign(this,{single,TestObject,threeExample})
  }

  ngOnInit(): void {
     this.teachersService.getAllTeachers().subscribe((teachersItem)=>{
       this.dataTeachers = teachersItem
       this.chislo = this.dataTeachers.length

    })
  }

}
