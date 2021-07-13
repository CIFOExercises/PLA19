import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringComponent } from './storing.component';

describe('StoringComponent', () => {
  let component: StoringComponent;
  let fixture: ComponentFixture<StoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
