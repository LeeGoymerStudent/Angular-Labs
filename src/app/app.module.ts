import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    LoginpageComponent,
    DetailspageComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    RouterModule.forRoot([
		{path:"userpage", component:UserpageComponent},
		{path:"login", component:LoginpageComponent},
		{path:"details", component:DetailspageComponent},
	]),
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
