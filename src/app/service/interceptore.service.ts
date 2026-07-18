import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptoreService implements HttpInterceptor {

  private spinner = inject(SpinnerService)
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.spinneremiter(true)
    let regclone = req.clone({
      setHeaders:{
        'content-type' : 'Application/json'
      }
    })
    return next.handle(regclone)
    .pipe(
      finalize(()=>{
        this.spinner.spinneremiter(false)
      })
    )
  }
}
