import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyChallengeButtonComponent } from './reply-challenge-button.component';

describe('ReplyChallengeButtonComponent', () => {
  let component: ReplyChallengeButtonComponent;
  let fixture: ComponentFixture<ReplyChallengeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyChallengeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyChallengeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
