import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oruro } from './oruro';

describe('Oruro', () => {
  let component: Oruro;
  let fixture: ComponentFixture<Oruro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oruro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oruro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
