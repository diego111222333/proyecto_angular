import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cochabamba } from './cochabamba';

describe('Cochabamba', () => {
  let component: Cochabamba;
  let fixture: ComponentFixture<Cochabamba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cochabamba]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cochabamba);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
