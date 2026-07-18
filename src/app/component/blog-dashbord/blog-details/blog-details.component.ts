import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  blogId!:string
blogobj!:Iblog
  constructor(
    private _blogservice:BlogService,
    private _routes:ActivatedRoute,
    private _ROUTER:Router
  ) { }

  ngOnInit(): void {
    this.fetchblogdetails()
  }

  fetchblogdetails(){
this.blogId = this._routes.snapshot.params['id']
if(this.blogId){
this._blogservice.fetblogById(this.blogId)
.subscribe({
  next:res=>{
    this.blogobj=res
  },error:err=>{
    console.log(err)
  }
})
}
  }

  onremove(){
    this._blogservice.onremove(this.blogId)
    .subscribe({
      next:res=>{
        console.log(res);
        this._ROUTER.navigate(['blog'])
        
      }
    })
  }

}
