import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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

  Duration = 0;
  at = "at";

  constructor() { }

  ngOnInit(): void {
  }

  get Logo(): string {
    return "assets/img/companies/" + this.experience.CompanyLogo;
  }
}
