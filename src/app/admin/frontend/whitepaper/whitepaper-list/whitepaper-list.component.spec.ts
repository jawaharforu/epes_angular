import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitepaperListComponent } from './whitepaper-list.component';

describe('WhitepaperListComponent', () => {
  let component: WhitepaperListComponent;
  let fixture: ComponentFixture<WhitepaperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitepaperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitepaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
