import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { DataService } from './services/data.service';
import { GlobalService } from './services/global.service';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService, GlobalService,
   
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [HeaderComponent]
})
export class CoreModuleModule { }
