import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AOSAnimations } from '../../models/aos-animations.enum';
import { ExperienceCardModel } from '../../models/experience-card-model';
import { ExperienceCardModelPosition } from '../../models/experience-card-model-position.enum';

@Injectable({
  providedIn: 'root'
})
export class ExperienceCardService {
  getDuration(startDate: Date, endDate: Date | null): string {
    let momentEndDate = moment(endDate ?? new Date(Date.now()));
    let momentStartDate = moment(startDate);
    let momentDuration = moment.duration(momentEndDate.diff(momentStartDate));
    let monthes = momentDuration.asMonths();
    let years = monthes / 12;
    monthes %= 12;
    let duration = "";

    if (years >= 1)
      duration += `${Math.floor(years)} yr `;

    duration += `${Math.ceil(monthes)} mos`;

    return duration;
  }

  getCardModel(index: number): ExperienceCardModel {
    if ((index % 2) == 0)
      return this.getLeftCardModel();
    else
      return this.getRightCardModel();
  }

  private getDefCardModel(): ExperienceCardModel {
    return new ExperienceCardModel();
  }

  private getLeftCardModel(): ExperienceCardModel {
    var model = this.getDefCardModel();
    model.CardAnimation = AOSAnimations.fadeLeft;
    model.LogoAnimation = AOSAnimations.flipRight;
    model.Position = ExperienceCardModelPosition.Right;
    return model;
  }

  private getRightCardModel(): ExperienceCardModel {
    var model = this.getDefCardModel();
    model.CardAnimation = AOSAnimations.fadeRight;
    model.LogoAnimation = AOSAnimations.flipLeft;
    model.Position = ExperienceCardModelPosition.Left;
    return model;
  }
}
