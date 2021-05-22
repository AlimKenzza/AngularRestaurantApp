import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFoodComponent } from './test-food.component';

describe('TestFoodComponent', () => {
  let component: TestFoodComponent;
  let fixture: ComponentFixture<TestFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
