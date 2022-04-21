import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1;
  private elementStyleRef: any;

  constructor(private eleRef: ElementRef) {
    this.elementStyleRef = this.eleRef.nativeElement.style;
    this.elementStyleRef.willChange = "transform";
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    this.elementStyleRef.transform = "translateY(" + (this.parallaxRatio * window.scrollY) + "px)";
  }

}
