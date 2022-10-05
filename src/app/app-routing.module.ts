import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { LoginComponent } from './login/login.component';

// import { LandingComponent } from './loginComponents/landing/landing.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'workspace', component: WorkspaceComponent, canActivate: [LoggedInGuard], },
  // { path: 'workspace', component: WorkspaceComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
