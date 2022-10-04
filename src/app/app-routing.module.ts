import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LandingComponent } from './loginComponents/landing/landing.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  { path: '', component: WorkspaceComponent },
  // { path: '', component: WorkspaceComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
