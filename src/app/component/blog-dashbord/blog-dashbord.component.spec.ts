import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDashbordComponent } from './blog-dashbord.component';

describe('BlogDashbordComponent', () => {
  let component: BlogDashbordComponent;
  let fixture: ComponentFixture<BlogDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
