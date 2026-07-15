import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagegallery } from './imagegallery';

describe('Imagegallery', () => {
  let component: Imagegallery;
  let fixture: ComponentFixture<Imagegallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imagegallery],
    }).compileComponents();

    fixture = TestBed.createComponent(Imagegallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
