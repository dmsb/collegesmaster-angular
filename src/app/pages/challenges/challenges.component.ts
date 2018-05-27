import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbMenuItem, NbMenuService, NbThemeService, NbMediaBreakpointsService, NbSidebarService, NbMediaBreakpoint } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { withLatestFrom, delay } from 'rxjs/operators';
import { StateService } from '../../@core/data/state.service';

@Component({
  selector: 'challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
