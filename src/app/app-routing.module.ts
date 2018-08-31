import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'page/:uid', component: PageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
