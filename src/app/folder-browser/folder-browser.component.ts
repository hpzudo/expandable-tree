import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {FlatTreeControl} from "@angular/cdk/tree";
import {GameFolder} from "../folder-browser-wizard/model/mocked-folders";
import {Observable} from "rxjs";
import {GameFolderFlatNode} from "./model/folder-browser.models";
import {FolderBrowserStore} from "./store/folder-browser.store";
import {fadeInOutAnimation} from "../shared/fade-in-out";


@Component({
  selector: 'app-folder-browser',
  templateUrl: './folder-browser.component.html',
  styleUrls: ['./folder-browser.component.scss'],
  animations: [fadeInOutAnimation],
  providers: [FolderBrowserStore]
})
export class FolderBrowserComponent implements OnInit {

  @Input() public set nodes(nodes: GameFolder[]) {
    this.store.patchState({ nodes });
  }

  @Input() public set selectedNodeId(selectedNodeId: number) {
    this.store.patchState({ selectedNodeId });
  }

  @Output() public readonly selectedNode = new EventEmitter<GameFolder>();

  @Output() public readonly previewNode = new EventEmitter<GameFolder>();

  public readonly vm$: Observable<{
    nodes: GameFolder[];
    selectedNodeId: number;
    nodesLoading: boolean;
  }> = this.store.select(
    this.store.nodes$,
    this.store.selectedNodeId$,
    this.store.nodesLoading$,
    (nodes, selectedNodeId, nodesLoading) => {
      return {
        nodes,
        selectedNodeId,
        nodesLoading
      };
    },
    { debounce: true } // docs suggests using this in order to improve performance (will only emit new values at the end of a microtask) -- https://indepth.dev/posts/1372/ngrx-component-store-debouncing
  );

  /* Tree variables */
  public treeControl = new FlatTreeControl<GameFolderFlatNode>(
    node => node.level,
    node => node.expandable
  );
  private _transformer = (node: GameFolder, level: number) => {
    const flatNode: GameFolderFlatNode = {
      id: node.id,
      name: node.name,
      description: node.description,
      expandable: !!node.subFolders && node.subFolders.length > 0,
      level: level
    };
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };
  private treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.subFolders
  );
  public dataSource: MatTreeFlatDataSource<GameFolder, GameFolderFlatNode, GameFolderFlatNode>;
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  private flatNodeMap = new Map<GameFolderFlatNode, GameFolder>();
  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  private nestedNodeMap = new Map<GameFolder, GameFolderFlatNode>();

  constructor(private store: FolderBrowserStore) { }

  ngOnInit(): void {
    this.setTreeDataSource();
  }

  public hasChild = (_: number, node: GameFolderFlatNode) => node.expandable;

  public nodeClick(clickedNode: GameFolderFlatNode, selectedNodeId: number): void {
      if (clickedNode.id !== selectedNodeId) {
        this.emitSelectedNode(clickedNode);
      }
  }

  public nodePreview(node: GameFolderFlatNode): void {
    const nestedNode = this.flatNodeMap.get(node);
    this.previewNode.emit(nestedNode);
  }

  private setTreeDataSource(): void {
    const nodes = this.store.getNodes();
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = nodes;
  }

  private emitSelectedNode(node: GameFolderFlatNode): void {
    const nestedNode = this.flatNodeMap.get(node);
    this.selectedNode.emit(nestedNode);
  }

}
