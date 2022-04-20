import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public title: string = "Synenko Vladyslav";
  private titles: string[] = ["Synenko Vladyslav", "Full-Stack Developer"];
  private currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    var interval = setInterval(() => this.title = this.titles[++this.currentIndex % 2], 4000);
  }

}
