import {GameFolder} from "../../folder-browser-wizard/model/mocked-folders";

export interface FolderBrowserState {
  nodes: GameFolder[];
  selectedNodeId: number;
  nodesLoading: boolean;
}

export interface GameFolderFlatNode {
  id: number;
  name: string;
  description: string;
  expandable: boolean;
  level: number;
}

export const initialFolderBrowserState: FolderBrowserState = {
  nodes: [],
  selectedNodeId: null,
  nodesLoading: false
}
