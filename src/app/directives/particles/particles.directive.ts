import { Directive, ElementRef } from '@angular/core';
import { ParticlesConfig } from 'src/particles-config';

declare let particlesJS: any;

@Directive({
  selector: '[appParticles]'
})
export class ParticlesDirective {

  constructor(private eleRef: ElementRef) {
    var particlesContainer = this.initParticles(eleRef.nativeElement);
    this.observe(particlesContainer);
  }

  private initParticles(particlesParrent: HTMLElement): Element {
    let id = particlesParrent.id;

    if (!id) {
      let message = "Particles container don`t have an Id";
      console.error(message);
      throw message;
    }

    particlesJS(id, ParticlesConfig);

    return particlesParrent.children[0];
  }

  private observe(element: any) {
    var observer = new IntersectionObserver(this.setInteraction.bind(this));
    observer.observe(element);
  }

  private setInteraction(enteries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    var particles = this.getParticlesObj(enteries[0].target);
    if (enteries[0].isIntersecting) {
      if (particles.particles.array.length == 0)
        particles.fn.particlesCreate();
    }
    else {
      particles.fn.particlesEmpty();
    }
  }

  private getParticlesObj(element: Element) {
    return (window as any).pJSDom.find((e: any) => e.pJS.canvas.el == element).pJS;
  }
}
