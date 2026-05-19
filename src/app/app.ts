import { Component } from '@angular/core';
import { LoginComponent } from './template-driven/login.component/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: `<app-login></app-login>`
})
export class App {}