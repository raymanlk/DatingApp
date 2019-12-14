import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.model = {};
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('login success');
    }, error => {
      console.log('failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // ret true or false
    return !!token;
  }

  logout() {
    const token = localStorage.removeItem('token');
    console.log('logged out');
  }

}
