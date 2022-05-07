import { Injectable } from '@angular/core';
import { ExperienceModel } from '../../models/experience-model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceAdapterService {
  constructor() { }

  transform(experienceData: any): ExperienceModel {
    let model = this.bindFields(experienceData);
    model = this.bindDescription(experienceData, model);
    return model;
  }

  private bindFields(experienceData: any): ExperienceModel {
    let model = new ExperienceModel();
    model.Company = experienceData.company;
    model.CompanyLogo = experienceData.companyLogo;
    model.Current = experienceData.current;
    model.Description = experienceData.description;
    model.EmpType = experienceData.empType;
    model.EndDate = new Date(experienceData.endDate);
    model.Href = experienceData.href;
    model.Position = experienceData.position;
    model.StartDate = new Date(experienceData.startDate);
    return model;
  }

  private bindDescription(experienceData: any, model: ExperienceModel): ExperienceModel {
    model.Description = experienceData.description?.text?.join("<br/>\n");
    model.Description += "<ul>\n";
    let techStack = experienceData.description?.techStack?.map((e: any) => `<li>${e}</li>`);
    model.Description += techStack?.join("\n");
    model.Description += "</ul>";
    return model;
  }
}
