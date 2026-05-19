import { Component } from '@angular/core';
import { LoginComponent } from './template-driven/login.component/login.component';
import { StudentRegistrationForm } from './template-driven/student-registration-form/student-registration-form';
import { FeedbackForm } from './template-driven/feedback-form/feedback-form';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, StudentRegistrationForm, FeedbackForm],
  template: `<app-login></app-login>
             <app-student-registration-form></app-student-registration-form>
             <app-feedback-form></app-feedback-form>`,
})
export class App {}