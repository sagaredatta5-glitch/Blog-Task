import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerbehave:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  spinnerobservable$ = this.spinnerbehave.asObservable()

  spinneremiter(flag:boolean){
    this.spinnerbehave.next(flag)
  }

  constructor() { }
}
