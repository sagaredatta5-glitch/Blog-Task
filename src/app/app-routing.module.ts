import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashbordComponent } from './component/home-dashbord/home-dashbord.component';
import { BlogDashbordComponent } from './component/blog-dashbord/blog-dashbord.component';
import { BlogFormComponent } from './component/blog-dashbord/blog-form/blog-form.component';
import { BlogDetailsComponent } from './component/blog-dashbord/blog-details/blog-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeDashbordComponent
  },
  {
    path:'home',
    component:HomeDashbordComponent
  },
  {
    path:'blog',
    component:BlogDashbordComponent
  },
  {
    path:'blog/addblog',
    component:BlogFormComponent
  },
  {
    path:'blog/:id',
    component:BlogDetailsComponent
  },
  {
    path:'blog/:id/edit',
    component:BlogFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
