import { GameFolder } from "./mocked-folders";

export interface FolderBrowserWizardState {
  folders: GameFolder[];
  selectedNodeId: number;
  loadingFolders: boolean;
}

export const initialFolderBrowserWizardState: FolderBrowserWizardState = {
  folders: [],
  selectedNodeId: null,
  loadingFolders: false
}

