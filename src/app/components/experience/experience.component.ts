import { Component, OnInit } from '@angular/core';
import { AOSAnimations } from '../../models/aos-animations.enum';
import { ExperienceCardModel } from '../../models/experience-card-model';
import { ExperienceModel } from '../../models/experience-model';
import { DataService } from '../../services/data/data.service';
import { ExperienceAdapterService } from '../../services/experience-adapter/experience-adapter.service';
import { ExperienceCardModelService } from '../../services/experience-card-model/experience-card-model.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private index: number = 0;

  experience: ExperienceModel[];

  constructor(
    private cardModelService: ExperienceCardModelService,
    private dataService: DataService,
    private experienceAdapter: ExperienceAdapterService) {
    this.experience = this.getExperience();
  }

  ngOnInit(): void {
    
  }

  getCardModel(): ExperienceCardModel {
    return this.cardModelService.getCardModel(this.index++);
  }

  getExperience(): ExperienceModel[] {
    let experienceData = this.dataService.getExperience();
    let experience = experienceData.map(e => this.experienceAdapter.transform(e));
    return experience;
  }
}
