import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RulesRegulationComponent } from './rules-regulation/rules-regulation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SpecialFeaturesComponent } from './special-features/special-features.component';
import { MessComponent } from './mess/mess.component';
import { RoomComponent } from './room/room.component';
import { SecurityComponent } from './security/security.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { DeleteListComponent } from './delete-list/delete-list.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    RulesRegulationComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    SpecialFeaturesComponent,
    MessComponent,
    RoomComponent,
    SecurityComponent,
    CertificatesComponent,
    DeleteListComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'login/changepassword',
        component:ChangePasswordComponent
      },
      {
        path:'login/myprofile',
        component:MyProfileComponent

      },
      {
        path:'login/dashboard',
        component:DashboardComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'',
        redirectTo:'home', pathMatch:'full'
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'login/register',
        component:UserRegistrationComponent
      },
      {
        path:'login/admin',
        component:AdminLoginComponent
      },
      {
        path:'login/user',
        component:UserLoginComponent
      },
      {
        path:'rules-regulation',
        component:RulesRegulationComponent
      },
      {
        path:'room',
        component:RoomComponent
      },
      {
        path:'mess',
        component:MessComponent
      },
      {
        path:'security',
        component:SecurityComponent
      },
      {
        path:'special-features',
        component:SpecialFeaturesComponent
      },
      {
        path:'certificates',
        component:CertificatesComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'list-user',
        component:ListUserComponent
      },
      {
        path:'delete-list',
        component:DeleteListComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
