import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-form',

  standalone: true,

  imports: [
    ReactiveFormsModule,
    CommonModule
  ],

  templateUrl: './registration-form.html',

  styleUrls: ['./registration-form.css']
})

export class RegistrationForm implements OnInit {

  registrationForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.registrationForm = this.fb.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],

      confirmPassword: [
        '',
        Validators.required
      ]

    });

  }

  onSubmit() {

    console.log(this.registrationForm.value);

  }

}