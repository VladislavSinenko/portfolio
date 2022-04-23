import { Directive, ElementRef } from '@angular/core';
import { ParticlesConfig } from 'src/particles-config';

declare let particlesJS: any;

@Directive({
  selector: '[appParticles]'
})
export class ParticlesDirective {

  constructor(private eleRef: ElementRef) {
    this.initParticles(eleRef.nativeElement);
  }

  initParticles(element: HTMLElement) {
    let id = element.id;

    if (!id) {
      let message = "Element don`t have an Id";
      console.error(message);
      throw message;
    }

    particlesJS(id, ParticlesConfig, function () { });
  }
}
