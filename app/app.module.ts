/*
Defines AppModule, the root module that tells Angular how to assemble the application. 
Right now it declares only the AppComponent. 
Soon there will be more components to declare. 
*/
// Default getstarted modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Additional modules ...
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
export class AppModule { }