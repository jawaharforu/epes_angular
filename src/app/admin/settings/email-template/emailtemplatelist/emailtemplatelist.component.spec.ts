import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtemplatelistComponent } from './emailtemplatelist.component';

describe('EmailtemplatelistComponent', () => {
  let component: EmailtemplatelistComponent;
  let fixture: ComponentFixture<EmailtemplatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailtemplatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailtemplatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
