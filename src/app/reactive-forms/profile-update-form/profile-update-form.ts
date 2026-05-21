import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-update-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-update-form.html',
  styleUrls: ['./profile-update-form.css']
})
export class ProfileUpdateFormComponent {

  data: any;
  form: any; // declare first

  constructor(private fb: FormBuilder) {
    //
    this.form = this.fb.group({
      username: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      profileType: ['basic']
    });
  }

  loadData() {
    this.form.patchValue({
      username: 'John Doe',
      phone: '9876543210'
    });
  }

  submit() {
    if (this.form.valid) {
      this.data = this.form.value;

      this.form.reset({
        profileType: 'basic'
      });
    }
  }
}