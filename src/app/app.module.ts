import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Data} from './data'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import{AngularFireModule} from'@angular/fire'

@NgModule({
  imports:      [ BrowserModule, FormsModule,AngularFireModule.initializeApp({
    apiKey: "AIzaSyARA1LBVgGjs_XzbrJuzGdegptBGsa8lZA",
    authDomain: "blistering-fire-8982.firebaseapp.com",
    databaseURL: "https://blistering-fire-8982.firebaseio.com",
    projectId: "blistering-fire-8982",
    storageBucket: "blistering-fire-8982.appspot.com",
    messagingSenderId: "638492837244",
    appId: "1:638492837244:web:71dfcc26fd009643"
  }) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers:[]
})
export class AppModule { }
