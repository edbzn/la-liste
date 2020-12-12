import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummitsComponent } from './summits.component';

describe('SummitsComponent', () => {
  let component: SummitsComponent;
  let fixture: ComponentFixture<SummitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
