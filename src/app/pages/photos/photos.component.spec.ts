import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '@core/services/api.service';

import { PhotosComponent } from './photos.component';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let apiServiceSpy = jasmine.createSpyObj('ApiService', ['getImages'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      providers: [{
        provide: ApiService, useValue: apiServiceSpy
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
