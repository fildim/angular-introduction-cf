import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerPromptComponent } from './danger-prompt.component';

describe('DangerPromptComponent', () => {
  let component: DangerPromptComponent;
  let fixture: ComponentFixture<DangerPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DangerPromptComponent]
    });
    fixture = TestBed.createComponent(DangerPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
