import { Injectable } from '@angular/core';
import { profileInfo } from '../../../profile';
import { MainInfo } from '../../models/main-info.nodel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getMainInfo() {
    return profileInfo.mainInfo;
  }

  getExperience(): any[] {
    return profileInfo.experience;
  }
}
