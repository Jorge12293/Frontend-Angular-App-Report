import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path:'**',component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
