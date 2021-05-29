import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './Admin/main/main.component';
import { AddNewsComponent } from './Admin/main/add-news/add-news.component';
import { AddKidsComponent } from './Admin/main/add-kids/add-kids.component';
import { AllNewsComponent } from './Admin/main/all-news/all-news.component';
import { OneNewsComponent } from './news/one-news/one-news.component';
import { AllKidsComponent } from './Admin/main/all-kids/all-kids.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { GroupsComponent } from './groups/groups.component';
import { HttpClientModule }   from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from '@angular/router';
import { DisplayMainComponent } from './display-main/display-main.component';
import { RegistrationForTheExcursionComponent } from './Admin/main/registration-for-the-excursion/registration-for-the-excursion.component';
import { AllNewsMainComponent } from './all-news-main/all-news-main.component';
import { ChangeNewsComponent } from './Admin/main/change-news/change-news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllTeachersComponent } from './Admin/main/all-teachers/all-teachers.component';
import { AddTeachersComponent } from './Admin/main/add-teachers/add-teachers.component';
import { AddGroupComponent } from './Admin/main/add-group/add-group.component';
import { ChangeKidComponent } from './Admin/main/change-kid/change-kid.component';
import { ChangeTeacherComponent } from './Admin/main/change-teacher/change-teacher.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BarChartsComponent} from './Admin/bar-charts/bar-charts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { GraphikPosehaemostiComponent } from './Admin/main/graphik-posehaemosti/graphik-posehaemosti.component';
import { AllGroupComponent } from './Admin/main/all-group/all-group.component';
import { FourQulityComponent } from './four-qulity/four-qulity.component';
import { AllEventsComponent } from './Admin/main/events/all-events/all-events.component';
import { AddEventsComponent } from './Admin/main/events/add-events/add-events.component';
import { ChangeEventsComponent } from './Admin/main/events/change-events/change-events.component';
import { AllEventsMainComponent } from './all-events-main/all-events-main.component';




const appRoutes: Routes =[
  { path: '',component:DisplayMainComponent},
  {path:'allNews',component:AllNewsMainComponent},
  {path:'allEvents',component:AllEventsMainComponent},
  {path:'oneNews',component:OneNewsComponent},
  {path:'personalArea',component:PersonalAreaComponent},


  { path: 'admin',component:MainComponent,children:[
      { path: 'allNews',component:AllNewsComponent},
      { path: 'addNews',component:AddNewsComponent},
      { path: 'allEvent',component:AllEventsComponent},
      { path: 'addEvent',component:AddEventsComponent},
      { path: 'changeEvent',component:ChangeEventsComponent},
      { path: 'statis',component:BarChartsComponent},
      { path: 'changeNews',component:ChangeNewsComponent},
      { path: 'changeTeachers',component:ChangeTeacherComponent},
      { path: 'changeKid',component:ChangeKidComponent},
      { path: 'allTeachers',component:AllTeachersComponent},
      { path: 'addTeachers',component:AddTeachersComponent},
      { path: 'addGroup',component:AddGroupComponent},
      { path: 'allGroup',component:AllGroupComponent},
      { path: 'graphikPosehaemosti',component:GraphikPosehaemostiComponent},
      { path: 'changeNews',component:ChangeNewsComponent},
      { path: 'addKids',component:AddKidsComponent},
      { path: 'allKids',component:AllKidsComponent},
      { path: 'allRegistrationForTheExcursion',component:RegistrationForTheExcursionComponent},
    ]
  }

];
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CarouselComponent,
        AppointmentComponent,
        NewsComponent,
        FooterComponent,
        MainComponent,
        AddNewsComponent,
        AddKidsComponent,
        AllNewsComponent,
        OneNewsComponent,
        AllKidsComponent,
        BenefitsComponent,
        GroupsComponent,
        DisplayMainComponent,
        RegistrationForTheExcursionComponent,
        AllNewsMainComponent,
        ChangeNewsComponent,
        AboutUsComponent,
        AllTeachersComponent,
        AddTeachersComponent,
        AddGroupComponent,
        ChangeKidComponent,
        ChangeTeacherComponent,
        BarChartsComponent,
        PersonalAreaComponent,
        GraphikPosehaemostiComponent,
        AllGroupComponent,
        FourQulityComponent,
        AllEventsComponent,
        AddEventsComponent,
        ChangeEventsComponent,
        AllEventsMainComponent

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
