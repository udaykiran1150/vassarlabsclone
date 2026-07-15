import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watertech } from './watertech';

describe('Watertech', () => {
  let component: Watertech;
  let fixture: ComponentFixture<Watertech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Watertech],
    }).compileComponents();

    fixture = TestBed.createComponent(Watertech);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
