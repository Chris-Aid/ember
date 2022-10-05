import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimaryViewContentComponent } from './primary-view-content/primary-view-content.component';
import { SecondaryViewContentComponent } from './secondary-view-content/secondary-view-content.component';
import { SearchComponent } from './search/search.component';
import { MessageInputComponent } from './message-input/message-input.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MessageComponent } from './message/message.component';
import { ThreadComponent } from './thread/thread.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    ToolbarComponent,
    SidebarComponent,
    PrimaryViewContentComponent,
    SecondaryViewContentComponent,
    SearchComponent,
    MessageInputComponent,
    MessageComponent,
    ThreadComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatTreeModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase,
      () => 'your_app_name_factory',
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: '/login', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: '/workspace', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 25, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 20,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
        useRawUserCredential: true, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
      }),
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
