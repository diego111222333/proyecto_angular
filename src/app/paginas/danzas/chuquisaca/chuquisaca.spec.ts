import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chuquisaca } from './chuquisaca';

describe('Chuquisaca', () => {
  let component: Chuquisaca;
  let fixture: ComponentFixture<Chuquisaca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chuquisaca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chuquisaca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
