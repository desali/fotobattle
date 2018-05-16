import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.login(username, password).subscribe(data => {
      if(data.success) {
        window.alert("You are logged in");
      } else {
        window.alert("Incorrect");
      }
    })
  }
}
