import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ExperienceCardModel } from '../../models/experience-card-model';
import { ExperienceModel } from '../../models/experience-model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input('model') model = new ExperienceCardModel();
  @Input('experience') experience: ExperienceModel;

  at = "at";

  Duration: string = "";
  EndDateStatement: string;
  Logo: string;

  constructor() { }

  ngOnInit(): void {
    this.initEndDate();
    this.initDuration();
    this.initLogo();
  }

  initEndDate() {
    if (!this.experience.EndDate) {
      this.EndDateStatement = "Present";
      this.experience.EndDate = new Date(Date.now());
    }
  }

  initDuration() {
    let endDate = moment(this.experience.EndDate);
    let startDate = moment(this.experience.StartDate);
    let duration = moment.duration(endDate.diff(startDate));
    let monthes = duration.asMonths();
    let years = monthes / 12;
    monthes %= 12;

    if (years >= 1)
      this.Duration += `${Math.floor(years)} yr `;

    this.Duration += `${Math.ceil(monthes)} mos`
  }

  initLogo() {
    this.Logo = "assets/img/companies/" + (this.experience.CompanyLogo ?? "default-company.png");
  }
}
