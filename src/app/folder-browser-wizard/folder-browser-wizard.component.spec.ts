import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderBrowserWizardComponent } from './folder-browser-wizard.component';

describe('FileBrowserWizardComponent', () => {
  let component: FolderBrowserWizardComponent;
  let fixture: ComponentFixture<FolderBrowserWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderBrowserWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderBrowserWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: implement unit tests

  it('should display file browser', () => {});
});
