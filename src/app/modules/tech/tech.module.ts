// * Angular 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// * Services
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// * Routing
import { TechRoutingModule } from './tech.routing';
// * Components
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { StarsComponent } from './components/stars/stars.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    StarsComponent
  ],
  imports: [
    CommonModule,
    TechRoutingModule,
    InfiniteScrollModule 
  ]
})
export class TechModule { }
