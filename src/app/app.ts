import { Component } from '@angular/core';

import { LoginComponent } from './template-driven/login.component/login.component';
import { StudentRegistrationForm } from './template-driven/student-registration-form/student-registration-form';
import { FeedbackForm } from './template-driven/feedback-form/feedback-form';
import { ContactUsForm } from './template-driven/contact-us-form/contact-us-form';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    LoginComponent,
    StudentRegistrationForm,
    FeedbackForm,
    ContactUsForm
  ],

  template: `
  
    <app-login></app-login>

    <hr>

    <app-student-registration-form></app-student-registration-form>

    <hr>

    <app-feedback-form></app-feedback-form>

    <hr>

    <app-contact-us-form></app-contact-us-form>

  `
})
export class App {

}