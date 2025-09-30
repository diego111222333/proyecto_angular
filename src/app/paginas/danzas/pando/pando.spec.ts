import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pando } from './pando';

describe('Pando', () => {
  let component: Pando;
  let fixture: ComponentFixture<Pando>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pando]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pando);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
