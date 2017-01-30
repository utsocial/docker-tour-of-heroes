/*
Defines AppModule, the root module that tells Angular how to assemble the application. 
Right now it declares only the AppComponent. 
Soon there will be more components to declare. 
*/
// Default getstarted modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
// Additional modules ...
>>>>>>> 715d268deda5b8a284a6b3c29e4db8d12cf717bb
import { FormsModule }   from '@angular/forms';

// Default getstarted modules
import { AppComponent }  from './app.component';

// Add it to the NgModule decorator's 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
<<<<<<< HEAD
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
=======
export class AppModule { }
>>>>>>> 715d268deda5b8a284a6b3c29e4db8d12cf717bb
