import { Directive, ElementRef } from '@angular/core';
import { ParticlesConfig } from 'src/particles-config';
import { ParticlesObj } from '../../models/ParticlesObj';
import { IntersectionService } from '../../services/intersection/intersection.service';
import { ParticlesService } from '../../services/particles/particles.service';

declare let particlesJS: any;

@Directive({
  selector: '[appParticles]'
})
export class ParticlesDirective {
  private particles: ParticlesObj;
  private observer: IntersectionObserver;

  constructor(private elementRef: ElementRef, private particlesService: ParticlesService, private intersectionService: IntersectionService) {
    this.particles = this.particlesService.insertParticles(elementRef.nativeElement, ParticlesConfig);
    this.particles.fn.particlesEmpty();
    this.observer = this.intersectionService.registerObserver(this.observerCallback.bind(this));
    this.observer.observe(this.particles.canvas.el);
  }

  private observerCallback(enteries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    if (enteries[0].isIntersecting)
      this.particles.fn.particlesCreate();
    else
      this.particles.fn.particlesEmpty();
  }
}
