// student-registration-form.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-registration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-registration-form.html',
  styleUrls: ['./student-registration-form.css']
})
export class StudentRegistrationForm {

  onSubmit(form: NgForm) {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log(form.value);
    alert('Form Submitted Successfully');

  }

}