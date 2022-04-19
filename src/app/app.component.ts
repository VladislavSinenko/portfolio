import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title: string = 'Full-Stack Developer - Synenko Vladyslav';

  public constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    AOS.init();
  }
}
