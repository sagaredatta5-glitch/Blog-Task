import { Component, OnInit } from '@angular/core';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-dashbord',
  templateUrl: './blog-dashbord.component.html',
  styleUrls: ['./blog-dashbord.component.scss']
})
export class BlogDashbordComponent implements OnInit {

blogarry:Array<Iblog> = []
  constructor(private _blogservice:BlogService) { }

  ngOnInit(): void {
    this.fetchblogdata()
  }

  fetchblogdata(){
this._blogservice.fetchblog()
.subscribe({
  next:data=>{
    this.blogarry=data
  }
})
  }

}
