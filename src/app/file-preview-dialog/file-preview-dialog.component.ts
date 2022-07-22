import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface FilePreviewDialogData {
  fileName: string;
  // I'm supposing fileContent is just a string (in a real scenario it would be a more realistic type such as XML, Blob, File, etc.)
  fileContent: string;
}

@Component({
  selector: 'app-file-preview-dialog',
  templateUrl: './file-preview-dialog.component.html',
  styleUrls: ['./file-preview-dialog.component.scss']
})
export class FilePreviewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: FilePreviewDialogData) { }

  ngOnInit(): void {
  }

}
