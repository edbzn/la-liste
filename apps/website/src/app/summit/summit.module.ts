import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SummitComponent } from './summit.component';


const routes: Routes = [
  { path: '', component: SummitComponent }
];

@NgModule({
  declarations: [SummitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SummitModule { }
