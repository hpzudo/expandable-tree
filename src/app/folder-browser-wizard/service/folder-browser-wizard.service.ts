import { Injectable } from '@angular/core';
import {GameFolder, MOCKED_FOLDERS} from "../model/mocked-folders";
import {Observable, of} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FolderBrowserWizardService {

  constructor() { }

  public getFiles(): Observable<GameFolder[]> {
    return of([...MOCKED_FOLDERS]).pipe(debounceTime(600));
  }
}
