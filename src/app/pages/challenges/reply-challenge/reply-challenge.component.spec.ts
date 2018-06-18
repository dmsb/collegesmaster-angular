import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyChallengeComponent } from './reply-challenge.component';

describe('ReplyChallengeComponent', () => {
  let component: ReplyChallengeComponent;
  let fixture: ComponentFixture<ReplyChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
