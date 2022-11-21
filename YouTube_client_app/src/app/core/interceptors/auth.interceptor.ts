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
    const token = 'AIzaSyCglrs4yuWE6aVxAzlnsTG_bBTTo3aDJSY';

    return next.handle(req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    }));
  }
}