import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user: any = {};
  submitted: boolean = false;

  currentRouter: Router;

  ngOnInit() {
    
  }

  constructor(private router: Router) {
    this.currentRouter = router;
  }

  authenticate(): void {
    this.submitted = true;
    this.currentRouter.navigateByUrl('/pages');
  }
}
