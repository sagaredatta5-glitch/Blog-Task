import { Component, inject, OnInit } from '@angular/core';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Blog-Task';

private spinnerservice = inject(SpinnerService)
isspinner:boolean = false


ngOnInit(): void {
    setTimeout(() =>{
      this.spinnerservice.spinnerobservable$
      .subscribe({
        next:res=>{
          this.isspinner = res
        }
      })
    },5000);
  }


}
