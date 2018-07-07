import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NbCheckboxModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

const formSetting: any = {
  redirectDelay: 500,
  showMessages: {
    success: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbCardModule
  ],
  declarations: [
      LoginComponent, 
      RegisterComponent, 
      AuthComponent
    ]
})
export class AuthModule { }
