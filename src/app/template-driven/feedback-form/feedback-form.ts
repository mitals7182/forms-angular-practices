import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.html',
  styleUrls: ['./feedback-form.css']
})
export class FeedbackForm {

  onSubmit(form: NgForm) {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log(form.value);

    alert('Feedback Submitted Successfully');

    // Reset Form
    form.resetForm();

  }

}
