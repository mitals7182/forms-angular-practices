import { Component } from '@angular/core';
import { LoginComponent } from './template-driven/login.component/login.component';
import { StudentRegistrationForm } from './template-driven/student-registration-form/student-registration-form';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, StudentRegistrationForm],
  template: `<app-login></app-login>
             <app-student-registration-form></app-student-registration-form>`,
})
export class App {}