import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'AIzaSyAXGFtJC_fAxrc1hCNebsKJ_u7wJobbFG0';

    return next.handle(req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    }));
  }
}