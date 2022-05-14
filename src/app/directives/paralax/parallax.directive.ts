import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio: number = 1;
  private elementStyleRef: any;

  constructor(private eleRef: ElementRef) {
    this.elementStyleRef = this.eleRef.nativeElement.style;
    window.addEventListener("scroll", this.onWindowScroll.bind(this));
  }

  onWindowScroll() {
    this.elementStyleRef.transform = "translateY(" + ~~(window.scrollY * this.parallaxRatio) + "px)";
  }
}
