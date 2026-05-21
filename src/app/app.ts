import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './template-driven/login.component/login.component';
import { StudentRegistrationForm } from './template-driven/student-registration-form/student-registration-form';
import { FeedbackForm } from './template-driven/feedback-form/feedback-form';
import { ContactUsForm } from './template-driven/contact-us-form/contact-us-form';
import { RegistrationForm } from './reactive-forms/registration-form/registration-form';
import { ProductForm } from './reactive-forms/product-form/product-form';
import { ProfileUpdateFormComponent } from './reactive-forms/profile-update-form/profile-update-form';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    LoginComponent,
    StudentRegistrationForm,
    FeedbackForm,
    ContactUsForm,
    RegistrationForm,
    ProductForm,
    ProfileUpdateFormComponent
  ],

  template: `
  
    <app-login></app-login>

    <hr>

    <app-student-registration-form></app-student-registration-form>

    <hr>

    <app-feedback-form></app-feedback-form>

    <hr>

    <app-contact-us-form></app-contact-us-form>

    <hr>

    <app-registration-form></app-registration-form>

    <hr>

    <app-product-form></app-product-form>

    <hr>

    <app-profile-update-form></app-profile-update-form>

  `
})
export class App {}