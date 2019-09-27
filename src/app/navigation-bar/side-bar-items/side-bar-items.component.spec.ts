import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarItemsComponent } from './side-bar-items.component';

describe('SideBarItemsComponent', () => {
  let component: SideBarItemsComponent;
  let fixture: ComponentFixture<SideBarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
