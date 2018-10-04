import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { LandingRoutingModule } from './landing-routing.module';
import { CarouselComponent } from '../../components/carousel/carousel.component'

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [HomeComponent, LandingContainerComponent, CarouselComponent]
})
export class LandingModule { }
