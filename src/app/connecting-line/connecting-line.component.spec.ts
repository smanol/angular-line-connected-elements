import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectingLineComponent } from './connecting-line.component';

describe('ConnectingLineComponent', () => {
  let component: ConnectingLineComponent;
  let fixture: ComponentFixture<ConnectingLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectingLineComponent]
    });
    fixture = TestBed.createComponent(ConnectingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
