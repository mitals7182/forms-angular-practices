import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateForm } from './profile-update-form';

describe('ProfileUpdateForm', () => {
  let component: ProfileUpdateForm;
  let fixture: ComponentFixture<ProfileUpdateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileUpdateForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileUpdateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
