import {Component, OnInit} from '@angular/core';
import {FolderBrowserWizardState} from "./model/folder-browser-wizard.models";
import {FolderBrowserWizardStore} from "./store/folder-browser-wizard.store";
import {combineLatest, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {GameFolder} from "./model/mocked-folders";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FilePreviewDialogComponent, FilePreviewDialogData} from "../file-preview-dialog/file-preview-dialog.component";

@Component({
  selector: 'app-folder-browser-wizard',
  templateUrl: './folder-browser-wizard.component.html',
  styleUrls: ['./folder-browser-wizard.component.scss'],
  providers: [FolderBrowserWizardStore]
})
export class FolderBrowserWizardComponent implements OnInit {

  constructor(private store: FolderBrowserWizardStore, private contextSnackbar: MatSnackBar, private dialog: MatDialog) { }

  public readonly vm$: Observable<FolderBrowserWizardState> = combineLatest([
    this.store.folders$,
    this.store.selectedNodeId$,
    this.store.loadingFolders$
  ]).pipe(
    map(([folders, selectedNodeId, loadingFolders]) => ({ folders, selectedNodeId, loadingFolders }))
  )

  ngOnInit(): void {
    this.store.getFolders();
  }

  public onNodeSelected(node: GameFolder): void {
    this.store.setSelectedNodeId(node.id);
  }

  public onNodePreview(node: GameFolder): void {
    if (this.isLeafNode(node)) {
      this.openDialog({
        fileName: node.name,
        fileContent: node.content
      })
    } else {
      this.contextSnackbar.open('error', 'Something went wrong, please try again later. If problem persists contact your system administrator.', null);
    }
  }

  private isLeafNode(node: GameFolder): boolean {
    return node.subFolders?.length === 0;
  }

  private openDialog(data: FilePreviewDialogData): void {
    this.dialog
      .open(FilePreviewDialogComponent, <MatDialogConfig<FilePreviewDialogData>>{data})
      .afterClosed()
      .subscribe(() => {});
  }

}
