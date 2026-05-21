import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',

  standalone: true,

  imports: [
    ReactiveFormsModule,
    CommonModule
  ],

  templateUrl: './product-form.html',

  styleUrls: ['./product-form.css']
})

export class ProductForm implements OnInit {

  productForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.productForm = this.fb.group({

      productName: [
        '',
        Validators.required
      ],

      price: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      category: [
        '',
        Validators.required
      ],

      description: ['']

    });

  }

  onSubmit() {

    console.log(this.productForm.value);

  }

}