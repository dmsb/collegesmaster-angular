import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider } from '@nebular/auth';
import { LoginComponent } from './login.component';

const formSetting: any = {
  redirectDelay: 500,
  showMessages: {
    success: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: 'http://localhost:8080/collegesmaster',
            login: {
              endpoint: '/oauth/token',
              method: 'post',
            },
            register: {
              endpoint: '/oauth/sign-up',
              method: 'post',
            },
            logout: {
                endpoint: '/oauth/token',
                method: 'delete',
              },
              requestPass: {
                endpoint: '/oauth/request-pass',
                method: 'post',
              },
              resetPass: {
                endpoint: '/oauth/reset-pass',
                method: 'post',
              },
          },
        },
      },
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
        validation: {
          password: {
            required: true,
            minLength: 6,
            maxLength: 50,
          },
          email: {
            required: true,
          },
          fullName: {
            required: false,
            minLength: 4,
            maxLength: 50,
          },
        },
      },
    })
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
