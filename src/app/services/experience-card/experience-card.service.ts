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

  private getLeftCardModel(): ExperienceCardModel {
    return { CardAnimation: AOSAnimations.fadeLeft, LogoAnimation: AOSAnimations.flipRight, Position: ExperienceCardModelPosition.Right } as ExperienceCardModel;
  }

  private getRightCardModel(): ExperienceCardModel {
    return { CardAnimation: AOSAnimations.fadeRight, LogoAnimation: AOSAnimations.flipLeft, Position: ExperienceCardModelPosition.Left } as ExperienceCardModel;
  }
}
