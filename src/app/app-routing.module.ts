import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sample01Component } from './sample01/sample01.component';

const routes: Routes = [
  { path: 'sample-01', component: Sample01Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
