import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iblog, Ires } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

blog_baseurl:string = environment.blog_baseurl

BLOG_URL = `${this.blog_baseurl}/blog.json`

  constructor(
    private _http:HttpClient
  ) { }


fetchblog():Observable<Iblog[]>{
  return this._http.get<Ires>(this.BLOG_URL)
  .pipe(
    map((obj:Ires)=>{
      let BlogArry:Array<Iblog> = []
      for(const key in obj){
        BlogArry.unshift({...obj[key],id:key})
      }
      return BlogArry
    })
  )
}

fetblogById(id:string):Observable<Iblog>{
  let singalURL = `${this.blog_baseurl}/blog/${id}.json`
  return this._http.get<Iblog>(singalURL)
} 

addnewblog(blog:Iblog):Observable<any>{
  let createurl = `${this.blog_baseurl}/blog.json`
  return this._http.post<any>(createurl,blog)
}

updatedblog(ublog:Iblog):Observable<any>{
  let updateURL = `${this.blog_baseurl}/blog/${ublog.id}.json`
  return this._http.patch<any>(updateURL,ublog)
}

onremove(eid:string):Observable<any>{
  let removeurl = `${this.blog_baseurl}/blog/${eid}.json`
  return this._http.delete<any>(removeurl)
}

}
