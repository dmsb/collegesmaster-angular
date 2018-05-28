import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeListingComponent } from './challenge-listing.component';

describe('ChallengeListingComponent', () => {
  let component: ChallengeListingComponent;
  let fixture: ComponentFixture<ChallengeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
