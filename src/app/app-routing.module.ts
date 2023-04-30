import { AdminPageComponent } from './youtube/pages/admin-page/admin-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { YoutubeComponent } from './youtube/components/youtube.component';
import { NonFoundComponent } from './youtube/pages/non-found/non-found.component';
import { DetailedPageComponent } from './youtube/pages/detailed-page/detailed-page.component';

const routes: Routes = [
  {path: '', component: YoutubeComponent},
  {path: 'detailed/:id', component: DetailedPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', component: AdminPageComponent},

  {path: '**', component: NonFoundComponent}
]

@NgModule({

  imports: [RouterModule.forRoot(routes, { useHash: true }), CommonModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
