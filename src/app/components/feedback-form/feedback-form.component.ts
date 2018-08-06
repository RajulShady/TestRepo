import { Component, OnInit } from '@angular/core';
import { FeedbackService} from '../../services/feedback.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  objectKeys = Object.keys;
  ratings:any;
  selectedValue:any;
  closeResult: string;
  constructor(private modalService: NgbModal,private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getRatings().subscribe(ratings => {
      this.ratings = ratings["ratings"];
    });
  }
  
  feedbackFormSubmit(content){
    console.log(this.selectedValue);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}


