import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  public title: string;

  private mainInfo: any;
  private titles: string[];
  private currentIndex = 0;

  private interval: NodeJS.Timeout;

  constructor(dataService: DataService) {
    this.mainInfo = dataService.getMainInfo();
  }

  ngOnInit(): void {
    this.title = this.mainInfo.name;
    this.titles = [this.mainInfo.name, this.mainInfo.profession];
    this.interval = setInterval(() => this.title = this.titles[++this.currentIndex % 2], 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
