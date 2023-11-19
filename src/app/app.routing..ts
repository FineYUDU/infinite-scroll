// * Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tech',
    loadChildren: ()=> import ('./modules/tech/tech.module').then(m=>m.TechModule)
  },
  { path:'**', redirectTo:'tech' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
