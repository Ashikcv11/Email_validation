import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerificationComponent } from './verification/verification.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:"",component:HomeComponent},
  {path:"verification",component:VerificationComponent},
  {path:'welcome',component:WelcomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
