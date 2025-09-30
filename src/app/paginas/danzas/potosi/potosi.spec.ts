import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Potosi } from './potosi';

describe('Potosi', () => {
  let component: Potosi;
  let fixture: ComponentFixture<Potosi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Potosi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Potosi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
