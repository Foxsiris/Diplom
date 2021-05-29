import {Component, OnInit} from '@angular/core';
import {RegistrationForTheExcursionService} from '../Services/registration-for-the-excursion.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  name: string;
  email: string;
  phone_number: string;

  constructor(private ApoitmentService: RegistrationForTheExcursionService) {
  }

  ngOnInit(): void {
  }

  addApoitment() {
    this.ApoitmentService.addRegistrationForTheExcursion(this.name, this.email, this.phone_number).subscribe(() => {
      this.name = '';
      this.email = '';
      this.phone_number = '';
    });
  }

}
