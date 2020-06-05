import { Component, VERSION } from '@angular/core';
import {Data} from'./data'
import{AngularFireDatabase} from'@angular/fire/database'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  adata:Data
   v:number[]=[]
   db:AngularFireDatabase
  constructor(data:Data,db:AngularFireDatabase){
    
     data.user=['utku','ali']
     data.userdata=[{lat:null,lng:null}]
     data.userdata.push({lat:40,lng:70})
     data.userdata.push({lat:50,lng:80})
      this.adata=data
     
     for(let ss of data.userdata){
       this.v.push(ss.lng)

     }
     var thiss=this
       var dbref=db.database.ref('den9map')
         dbref.once('value').then(function(datasnapshot){
            
            
         })


         
     

       }

 

}
