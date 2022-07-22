import { TestBed } from '@angular/core/testing';

import { FolderBrowserWizardService } from './folder-browser-wizard.service';

describe('FileBrowserWizardService', () => {
  let service: FolderBrowserWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderBrowserWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
