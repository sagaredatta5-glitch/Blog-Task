import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

blogform!:FormGroup
blogId!:string
isineditmode:boolean=false

  constructor(
    private _blogservice:BlogService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createblogform()
    this.pathblogdata()
  }


  pathblogdata(){
this.blogId = this._routes.snapshot.paramMap.get('id')!
if(this.blogId){
  this._blogservice.fetblogById(this.blogId)
  .subscribe({
    next:res=>{
      this.blogform.patchValue(res)
      this.isineditmode=true
    }
  })
}
  }

  createblogform(){
this.blogform = new FormGroup({
  title:new FormControl(null,[Validators.required]),
  body:new FormControl(null,[Validators.required]),
  userId:new FormControl(null,[Validators.required])

})
  }

  onsubmitblog(){
    if(this.blogform.invalid){
      this.blogform.markAllAsTouched()
    }else{
      let newobj:Iblog = {
        ...this.blogform.value
      }
      this._blogservice.addnewblog(newobj)
      .subscribe({
        next:res=>{
          console.log(res)
          this.blogform.reset()
          this._router.navigate(['blog'])

        }
      })
    }
  }

  onupdate(){
    if(this.blogform.invalid){
      this.blogform.markAllAsTouched()
    }else{
      let updated:Iblog = {
        ...this.blogform.value
      }
      this._blogservice.updatedblog(updated)
      .subscribe({
        next:res=>{
          console.log(res)
          this.blogform.reset()
          this.isineditmode=false
           this._router.navigate(['blog'])         
        }
      })
    }
  }

}
