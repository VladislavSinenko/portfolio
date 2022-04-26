import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';
import { IntersectionService } from './services/intersection/intersection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private title: string = 'Full-Stack Developer - Synenko Vladyslav';

  public constructor(private titleService: Title, private intersectionService: IntersectionService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    AOS.init();
  }

  ngOnDestroy(): void {
    this.intersectionService.ngOnDestroy();
  }
}
