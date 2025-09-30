import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Santacruz } from './santacruz';

describe('Santacruz', () => {
  let component: Santacruz;
  let fixture: ComponentFixture<Santacruz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Santacruz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Santacruz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
