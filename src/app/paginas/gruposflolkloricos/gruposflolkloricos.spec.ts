import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gruposflolkloricos } from './gruposflolkloricos';

describe('Gruposflolkloricos', () => {
  let component: Gruposflolkloricos;
  let fixture: ComponentFixture<Gruposflolkloricos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gruposflolkloricos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gruposflolkloricos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
