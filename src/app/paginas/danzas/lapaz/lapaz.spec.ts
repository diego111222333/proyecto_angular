import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lapaz } from './lapaz';

describe('Lapaz', () => {
  let component: Lapaz;
  let fixture: ComponentFixture<Lapaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lapaz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lapaz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
