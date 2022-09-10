import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryViewContentComponent } from './primary-view-content.component';

describe('PrimaryViewContentComponent', () => {
  let component: PrimaryViewContentComponent;
  let fixture: ComponentFixture<PrimaryViewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryViewContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
