import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginService } from './services/login.service';
import { CoreModuleModule } from '../core/core-module.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    CoreModuleModule,
    FormsModule,
  ],
  exports: [LoginPageComponent],
  providers: [LoginService]
})
export class AuthModule { }
