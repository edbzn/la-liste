import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummitsComponent } from './summits.component';

const routes: Routes = [
  { path: '', component: SummitsComponent }
];

@NgModule({
  declarations: [SummitsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SummitsModule { }
