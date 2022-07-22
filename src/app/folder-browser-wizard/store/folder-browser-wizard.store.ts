import {ComponentStore, tapResponse} from '@ngrx/component-store';
import {FolderBrowserWizardState, initialFolderBrowserWizardState} from "../model/folder-browser-wizard.models";
import {GameFolder} from "../model/mocked-folders";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {finalize, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {FolderBrowserWizardService} from "../service/folder-browser-wizard.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class FolderBrowserWizardStore extends ComponentStore<FolderBrowserWizardState> {
  constructor(private folderBrowserWizardService: FolderBrowserWizardService, private contextSnackbar: MatSnackBar) {
    super(initialFolderBrowserWizardState)
  }

  /**
   * Selectors
   */
  public readonly folders$: Observable<GameFolder[]> = this.select(state => state.folders);
  public readonly loadingFolders$: Observable<boolean> = this.select(state => state.loadingFolders);
  public readonly selectedNodeId$: Observable<number> = this.select(state => state.selectedNodeId);

  /**
   * Updaters
   */
  readonly setLoadingFolders = this.updater<boolean>((state, loadingSources) => ({ ...state, loadingSources }));
  readonly setFolders = this.updater<GameFolder[]>((state, folders) => ({ ...state, folders }));
  readonly setSelectedNodeId = this.updater<number>((state, selectedNodeId) => ({ ...state, selectedNodeId }));

  /**
   * Effects
   */
  readonly getFolders = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => this.setLoadingFolders(true)),
      switchMap((_) => {
        return this.folderBrowserWizardService.getFiles().pipe(
          tapResponse(
            folders => {
              this.patchState({ folders, selectedNodeId: null});
            },
            (e: HttpErrorResponse) => {
              this.setFolders([])
              this.contextSnackbar.open('error', 'Something went wrong, please try again later. If problem persists contact your system administrator.', null);
            }
          ),
          finalize(() => this.setLoadingFolders(false))
        );
      })
    )
  );

}
