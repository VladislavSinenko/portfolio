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
    model.EndDate = experienceData.endDate ? new Date(experienceData.endDate) : null;
    model.Href = experienceData.href;
    model.Position = experienceData.position;
    model.StartDate = new Date(experienceData.startDate);
    return model;
  }

  private bindDescription(experienceData: any, model: ExperienceModel): ExperienceModel {
    if (experienceData.description?.text) {
      model.Description = experienceData.description.text.join("<br/>\n");
    }
    if (experienceData.description?.techStack) {
      model.Description += "<br/>\n<br/>\n";
      model.Description += experienceData.description.techStack.title + "<br/>\n<br/>\n";
      model.Description += "<ul>\n";
      let techStack = experienceData.description.techStack.stack.map((e: any) => `<li>${e}</li>`);
      model.Description += techStack?.join("\n");
      model.Description += "</ul>";
    }
    return model;
  }
}
