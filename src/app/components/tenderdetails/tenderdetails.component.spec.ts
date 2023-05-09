import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderdetailsComponent } from './tenderdetails.component';

describe('TenderdetailsComponent', () => {
  let component: TenderdetailsComponent;
  let fixture: ComponentFixture<TenderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
