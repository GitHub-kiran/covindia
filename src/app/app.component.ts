import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Router, NavigationStart} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  })

export class AppComponent implements OnInit {
  // constructor(private router: Router) {
  // }

  ngOnInit(){
    
 }
  // item$: Observable<any[]>;
  // groups$: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   this.item$ = firestore.collection('users').valueChanges();
  //   this.groups$ = firestore.collection('company').valueChanges();
  //   console.log(this.item$.forEach(a => { 
  //     console.log(a);
  //   }));
  // }
}

