import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryViewContentComponent } from './secondary-view-content.component';

describe('SecondaryViewContentComponent', () => {
  let component: SecondaryViewContentComponent;
  let fixture: ComponentFixture<SecondaryViewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryViewContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
