import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio: number = 1;
  private elementStyleRef: any;
  [index: number]: string;

  constructor(private eleRef: ElementRef) {
    this.elementStyleRef = this.eleRef.nativeElement.style;
    this.elementStyleRef.willChange = "transform";
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    let scrollY = ~~window.scrollY;
    this.elementStyleRef.transform = this[scrollY] ?? (this[scrollY] = "translateY(" + (scrollY * this.parallaxRatio) + "px)");
  }
}
