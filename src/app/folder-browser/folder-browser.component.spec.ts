import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderBrowserComponent } from './folder-browser.component';

describe('FileBrowserComponent', () => {
  let component: FolderBrowserComponent;
  let fixture: ComponentFixture<FolderBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Implement unit tests

  describe('should expand/collapse correctly', () => {
    it('should have nodes collapsed after initialization', () => {});
    it('should expand the expandable clicked node', () => {});
    it('should collapse the expanded clicked node', () => {});
  })

  describe('should be able to preview leaf nodes', () => {
    it('should preview only supported types (.txt)', () => {});
    it('should display an icon that indicates the leaf file type is not supported', () => {});
  });
});
