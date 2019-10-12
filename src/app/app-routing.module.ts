import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sample01Component } from './sample01/sample01.component';
import { Sample02Component } from './sample02/sample02.component';
import { Sample03Component } from './sample03/sample03.component';

const routes: Routes = [
  { path: 'sample-01', component: Sample01Component  },
  { path: 'sample-02', component: Sample02Component  },
  { path: 'sample-03', component: Sample03Component  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
