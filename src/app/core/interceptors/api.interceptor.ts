import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = 'AIzaSyAXGFtJC_fAxrc1hCNebsKJ_u7wJobbFG0'; //'AIzaSyAXGFtJC_fAxrc1hCNebsKJ_u7wJobbFG0'
// 'AIzaSyCglrs4yuWE6aVxAzlnsTG_bBTTo3aDJSY'  - Женя
    return next.handle(req.clone({
      url: `${'https://www.googleapis.com/youtube/v3'}/${req.url}`
      // 'search?key=AIzaSyAXGFtJC_fAxrc1hCNebsKJ_u7wJobbFG0&type=video&part=snippet&maxResults=1&q=js'
    }));
  }
}
