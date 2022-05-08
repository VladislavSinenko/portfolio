import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ExperienceCardModel } from '../../models/experience-card-model';
import { ExperienceModel } from '../../models/experience-model';
import { ExperienceCardService } from '../../services/experience-card/experience-card.service';
import { experienceCardConsts as consts } from '../../consts/experience-card.const';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input("model") model = new ExperienceCardModel();
  @Input("experience") experience: ExperienceModel;

  at = "at";

  Duration: string;
  NullEndDateValue: string;
  Logo: string;

  constructor(private experienceCardService: ExperienceCardService) { }

  ngOnInit(): void {
    this.initEndDate();
    this.initDuration();
    this.initLogo();
  }

  initEndDate() {
    if (!this.experience.EndDate) {
      this.NullEndDateValue = "Present";
      this.experience.EndDate = new Date(Date.now());
    }
  }

  initDuration() {
    this.Duration = this.experienceCardService.getDuration(this.experience.StartDate, this.experience.EndDate);
  }

  initLogo() {
    this.Logo = consts.companiesImgPath + (this.experience.CompanyLogo ?? consts.defaultCompanyImg);
  }
}
