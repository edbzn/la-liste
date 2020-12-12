import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'summits', pathMatch: 'full' },
      { path: 'summits', loadChildren: () => import('./summits/summits.module').then(m => m.SummitsModule) },
      { path: 'summit/:id', loadChildren: () => import('./summit/summit.module').then(m => m.SummitModule) },
      { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
      { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
