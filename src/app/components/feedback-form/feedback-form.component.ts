import { Component, OnInit } from '@angular/core';
import { FeedbackService} from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  objectKeys = Object.keys;
  ratings:any;
  selectedValue:any;
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getRatings().subscribe(ratings => {
      this.ratings = ratings["ratings"];
    });
  }
  
  feedbackFormSubmit(){
    console.log(this.selectedValue);
    }

}
