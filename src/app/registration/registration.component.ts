import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  register(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const fullname = target.querySelector('#fullname').value;
    const username = target.querySelector('#username').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const city = target.querySelector('#city').value;
    const birthday = target.querySelector('#day').value + "." + target.querySelector('#month').value + "." +target.querySelector('#year').value;
    const gender = target.querySelector('#gender-male').checked ? "male" : "female";

    this.Auth.register(fullname, username, email, password, city, birthday, gender).subscribe(data => {
      if(data.success) {
        window.alert("You are logged in");
      } else {
        window.alert("Incorrect");
      }
    })
  }
}
