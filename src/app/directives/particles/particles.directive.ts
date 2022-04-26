import { Directive, ElementRef } from '@angular/core';
import { ParticlesConfig } from 'src/particles-config';
import { IntersectionService } from '../../services/intersection/intersection.service';

declare let particlesJS: any;

@Directive({
  selector: '[appParticles]'
})
export class ParticlesDirective {
  private pJSDom: any = (window as any).pJSDom;
  private particles: any;
  private observer: IntersectionObserver;

  constructor(private eleRef: ElementRef, private intersectionService: IntersectionService) {
    var particlesContainer = this.initParticles(eleRef.nativeElement);
    this.particles = this.getParticlesObj(particlesContainer);
    this.particles.fn.particlesEmpty();
    this.observer = this.intersectionService.registerObserver(this.setInteraction.bind(this));
    this.observer.observe(particlesContainer);
  }

  private initParticles(particlesParrent: HTMLElement): Element {
    if (particlesParrent.id.length == 0) {
      particlesParrent.id = "particles-js-container-" + this.pJSDom.length;
    }

    particlesJS(particlesParrent.id, ParticlesConfig);

    return particlesParrent.children[0];
  }

  private setInteraction(enteries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    if (enteries[0].isIntersecting) {
      this.particles.fn.particlesCreate();
    }
    else {
      this.particles.fn.particlesEmpty();
    }
  }

  private getParticlesObj(element: Element) {
    return this.pJSDom.find((e: any) => e.pJS.canvas.el == element).pJS;
  }
}
