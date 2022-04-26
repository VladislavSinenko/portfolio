import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionService implements OnDestroy {
  private observers: IntersectionObserver[] = [];

  constructor() { }

  registerObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver {
    var observer = new IntersectionObserver(callback, options);
    this.observers.push(observer);

    return observer;
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
  }
}
