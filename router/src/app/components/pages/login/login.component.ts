import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  route: Router) {
  }

  public orr = false;

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    if (localStorage.getItem('user')) {
      this.route.navigate(['']);
    }
  }

  onLogin(username: string, pass: string) {
    let user = {
      username1: username,
      passs: pass
    };
    // tslint:disable-next-line:triple-equals
    if (username == 'admin' && pass == 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.orr = false;
      this.route.navigate(['products']);
    } else {
      this.orr = true;
    }
  }

}
