import { ComponentStore } from '@ngrx/component-store';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FolderBrowserState, initialFolderBrowserState} from "../model/folder-browser.models";
import {GameFolder} from "../../folder-browser-wizard/model/mocked-folders";

@Injectable()
export class FolderBrowserStore extends ComponentStore<FolderBrowserState> {
  constructor() {
    super(initialFolderBrowserState)
  }

  /**
   * Selectors
   */
  public readonly nodes$: Observable<GameFolder[]> = this.select(state => state.nodes);
  public readonly nodesLoading$: Observable<boolean> = this.select(state => state.nodesLoading);
  public readonly selectedNodeId$: Observable<number> = this.select(state => state.selectedNodeId);

  /**
   * Updaters
   */

  /**
   * Effects
   */

  /**
   * Getters
   */
  public getNodes(): GameFolder[] {
    return this.get(store => store.nodes);
  }
}
