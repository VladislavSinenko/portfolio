import { Injectable } from '@angular/core';
import { ParticlesObj } from '../../models/ParticlesObj';
declare let particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {
  private pJSDom: any[] = (window as any).pJSDom;

  constructor() { }

  insertParticles(element: Element, config: any): ParticlesObj {
    if (element.id.length == 0)
      element.id = "particles-js-container-" + this.pJSDom.length;

    particlesJS(element.id, config);

    var container = element.children[0];
    var particlesObj = this.pJSDom.find((e: any) => e.pJS.canvas.el == container).pJS as ParticlesObj;
    return particlesObj;
  }
}
