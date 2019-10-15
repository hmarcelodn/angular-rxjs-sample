import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sample01Component } from './sample01/sample01.component';
import { Sample02Component } from './sample02/sample02.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sample-01', component: Sample01Component  },
  { path: 'sample-02', component: Sample02Component  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
