import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService implements OnInit{
  data: any;

  constructor(public http : HttpClient) {
   }
  
   ngOnInit(){
     console.log('I am the service');
   }

  getRatings(){
    return this.http.get('https://www.naviadoctors.com/visit_feedback/front_end_test');
  }

}

