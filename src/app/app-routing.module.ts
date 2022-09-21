import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './loginComponents/home/home.component';
// import { LandingComponent } from './loginComponents/landing/landing.component';
import { LoginComponent } from './loginComponents/login/login.component';
import { SignUpComponent } from './loginComponents/sign-up/sign-up.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: WorkspaceComponent },
  // { path: '', component: WorkspaceComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
