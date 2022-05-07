import { Injectable } from '@angular/core';
import { AOSAnimations } from '../../models/aos-animations.enum';
import { ExperienceCardModel } from '../../models/experience-card-model';
import { ExperienceCardModelPosition } from '../../models/experience-card-model-position.enum';

@Injectable({
  providedIn: 'root'
})
export class ExperienceCardModelService {
  constructor() { }

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
