import { Injectable } from '@angular/core';
import { ParticlesObj } from '../../models/particles-obj';
declare let particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {
  private pJSDom: any[] = (window as any).pJSDom;

  constructor() { }

  insertParticles(container: Element, config: any): ParticlesObj {
    if (container.id.length == 0)
      container.id = "particles-js-container-" + this.pJSDom.length;

    particlesJS(container.id, config);

    var element = container.children[0];
    var particlesObj = this.pJSDom.find((e: any) => e.pJS.canvas.el == element).pJS as ParticlesObj;
    return particlesObj;
  }
}
