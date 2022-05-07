import { Directive, ElementRef } from '@angular/core';
import { ParticlesConfig } from 'src/particles-config';
import { ParticlesObj } from '../../models/particles-obj';
import { IntersectionService } from '../../services/intersection/intersection.service';
import { ParticlesService } from '../../services/particles/particles.service';

@Directive({
  selector: '[appParticles]'
})
export class ParticlesDirective {
  private particles: ParticlesObj;

  constructor(private elementRef: ElementRef, private particlesService: ParticlesService, private intersectionService: IntersectionService) {
    this.observe(this.elementRef.nativeElement, this.particlesLazyLoad.bind(this));
  }

  private observe(element: Element, callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver{
    let observer = this.intersectionService.registerObserver(callback, options);
    observer.observe(element);
    return observer;
  }

  private particlesLazyLoad(enteries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    this.particles = this.particlesService.insertParticles(enteries[0].target, ParticlesConfig);
    this.particles.fn.particlesEmpty();

    observer.unobserve(enteries[0].target);

    this.observe(this.particles.canvas.el, this.intersectingCallback.bind(this));
  }

  private intersectingCallback(enteries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    if (enteries[0].isIntersecting)
      this.particles.fn.particlesCreate();
    else
      this.particles.fn.particlesEmpty();
  }
}
