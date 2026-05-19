// contact-us-form.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us-form.html',
  styleUrls: ['./contact-us-form.css']
})
export class ContactUsForm {

  onSubmit(form: NgForm) {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log(form.value);

    alert('Message Sent Successfully');

    form.resetForm();

  }

}