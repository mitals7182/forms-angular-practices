import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-management-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-management-form.html',
  styleUrls: ['./employee-management-form.css']
})
export class EmployeeManagementForm {

  data: any;
  form: any;

  constructor(private fb: FormBuilder) {

  
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      experience: ['', [Validators.required, this.expValidator]],
      department: ['', Validators.required]
    });
  }

  // Custom validation
  expValidator(control: any) {
    const value = control.value;

    if (value < 0 || value > 40) {
      return { invalidExp: true };
    }
    return null;
  }

  submit() {
    if (this.form.valid) {
      this.data = this.form.value;
      this.form.reset();
    } else {
      alert("Form is invalid");
    }
  }
}