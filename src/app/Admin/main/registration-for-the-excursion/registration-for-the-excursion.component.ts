import {Component, OnInit} from '@angular/core';
import {RegistrationForTheExcursionService} from '../../../Services/registration-for-the-excursion.service';
import {Registration_for_the_excursion} from '../../../models/registration_for_the_excursion';

@Component({
  selector: 'app-registration-for-the-excursion',
  templateUrl: './registration-for-the-excursion.component.html',
  styleUrls: ['./registration-for-the-excursion.component.css']
})
export class RegistrationForTheExcursionComponent implements OnInit {
  registrationAll: Registration_for_the_excursion[];
  selectedRegistr:Registration_for_the_excursion
  constructor(private registrationForService: RegistrationForTheExcursionService) {
  }

  ngOnInit(): void {
    this.registrationForService.allRegistrationForTheExcursion().subscribe(allRegistration=>{
      this.registrationAll = allRegistration
    })
  }
  deleteRegistration(chooseItem:Registration_for_the_excursion){
    this.selectedRegistr = chooseItem
    this.registrationForService.deleteRegistrationForTheExcursion(this.selectedRegistr.id).subscribe(()=>{

    })
  }


}
