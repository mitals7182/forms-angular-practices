import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementForm } from './employee-management-form';

describe('EmployeeManagementForm', () => {
  let component: EmployeeManagementForm;
  let fixture: ComponentFixture<EmployeeManagementForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagementForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeManagementForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
