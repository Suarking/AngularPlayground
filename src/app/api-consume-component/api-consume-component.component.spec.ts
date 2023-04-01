import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConsumeComponentComponent } from './api-consume-component.component';

describe('ApiConsumeComponentComponent', () => {
  let component: ApiConsumeComponentComponent;
  let fixture: ComponentFixture<ApiConsumeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiConsumeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiConsumeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
