import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [ 
  {
    path:'',
    component:MainComponent,
    children:[
      { path:'home', component  : HomeComponent  },
      { path:'**', redirectTo:'home', pathMatch:'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechRoutingModule { }
