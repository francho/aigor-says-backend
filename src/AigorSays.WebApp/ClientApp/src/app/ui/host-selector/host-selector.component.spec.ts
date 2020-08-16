import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSelectorComponent } from './host-selector.component';

describe('HostSelectorComponent', () => {
  let component: HostSelectorComponent;
  let fixture: ComponentFixture<HostSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
