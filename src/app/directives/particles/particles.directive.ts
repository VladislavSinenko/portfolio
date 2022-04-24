import { Directive, ElementRef } from '@angular/core';
import { ParticlesConfig } from 'src/particles-config';

declare let particlesJS: any;

@Directive({
  selector: '[appParticles]'
})
export class ParticlesDirective {

  constructor(private eleRef: ElementRef) {
    this.observe(eleRef.nativeElement);
  }

  observe(element: any) {
    var observer = new IntersectionObserver(this.initParticles);
    observer.observe(element);
  }

  initParticles(enteries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    let element = enteries[0];
    if (element.isIntersecting) {
      let id = element.target.id;

      if (!id) {
        let message = "Element don`t have an Id";
        console.error(message);
        throw message;
      }

      particlesJS(id, ParticlesConfig);
    }
    else {
      element.target.children[0]?.remove();
    }
  }
}
