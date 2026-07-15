import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technologypowerhouse } from './technologypowerhouse';

describe('Technologypowerhouse', () => {
  let component: Technologypowerhouse;
  let fixture: ComponentFixture<Technologypowerhouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Technologypowerhouse],
    }).compileComponents();

    fixture = TestBed.createComponent(Technologypowerhouse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
