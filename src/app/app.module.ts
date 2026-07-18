import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeDashbordComponent } from './component/home-dashbord/home-dashbord.component';
import { BlogDashbordComponent } from './component/blog-dashbord/blog-dashbord.component';
import { BlogFormComponent } from './component/blog-dashbord/blog-form/blog-form.component';
import { BlogDetailsComponent } from './component/blog-dashbord/blog-details/blog-details.component';
import { BlogCardComponent } from './component/blog-dashbord/blog-card/blog-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatRippleModule } from "@angular/material/core";
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptoreService } from './service/interceptore.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeDashbordComponent,
    BlogDashbordComponent,
    BlogFormComponent,
    BlogDetailsComponent,
    BlogCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    ReactiveFormsModule
],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,multi:true,useClass:InterceptoreService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
