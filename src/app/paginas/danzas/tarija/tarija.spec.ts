import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarija } from './tarija';

describe('Tarija', () => {
  let component: Tarija;
  let fixture: ComponentFixture<Tarija>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarija]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarija);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
