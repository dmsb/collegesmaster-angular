import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReplyChallengeComponent } from '../../reply-challenge/reply-challenge.component';

@Component({
  selector: 'reply-challenge-button',
  template: `<button class="btn btn-block btn-hero-success" (click)="onClickEvent($event)">Reply</button>`
})
export class ReplyChallengeButtonComponent extends DefaultEditor implements AfterViewInit {

  constructor(private modalService: NgbModal) {
    super();
  }

  ngAfterViewInit() { }

  onClickEvent(event) {
    const activeModal = this.modalService.open(ReplyChallengeComponent, { size: 'lg', container: 'nb-layout' });
    //Substituir 'Challenge' pelo título do desafio!
    activeModal.componentInstance.modalHeader = 'Challenge';
  }

}
