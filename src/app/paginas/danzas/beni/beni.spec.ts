import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beni } from './beni';

describe('Beni', () => {
  let component: Beni;
  let fixture: ComponentFixture<Beni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Beni]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Beni);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
