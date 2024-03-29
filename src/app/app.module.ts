import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MasterHeadComponent } from './components/master-head/master-head.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ParallaxDirective } from './directives/paralax/parallax.directive';
import { ParticlesDirective } from './directives/particles/particles.directive';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MasterHeadComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CopyrightComponent,
    ExperienceComponent,
    ParallaxDirective,
    ParticlesDirective,
    ExperienceCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
