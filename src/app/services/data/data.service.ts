import { Injectable } from '@angular/core';
import { profileInfo } from '../../../profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getExperience(): any[] {
    return profileInfo.experience;
  }
}
