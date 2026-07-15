import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agritech } from './agritech';

describe('Agritech', () => {
  let component: Agritech;
  let fixture: ComponentFixture<Agritech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agritech],
    }).compileComponents();

    fixture = TestBed.createComponent(Agritech);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
