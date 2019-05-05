import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { MountainComponent } from './mountain/mountain.component';
import { MountainService } from './providers/mountain.service';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'mountains', component: MountainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    MountainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    MountainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
