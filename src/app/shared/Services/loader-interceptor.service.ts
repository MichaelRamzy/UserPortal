import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private SharedService: SharedService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.SharedService.showLoader();
    console.log('fe');
    
    return next.handle(request).pipe(
      finalize(() => {
        console.log('5ls');
        this.SharedService.hideLoader();
      })
    );
  }
}
