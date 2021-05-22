import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRestaurantComponent } from './test-restaurant.component';

describe('TestRestaurantComponent', () => {
  let component: TestRestaurantComponent;
  let fixture: ComponentFixture<TestRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
