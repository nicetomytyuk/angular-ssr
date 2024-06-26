import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <h1>Login</h1>
    <input type="text" name="username" placeholder="username" />
    <input type="password" name="password" placeholder="password" />
  `,
  styles: ``
})
export class LoginComponent {

}
