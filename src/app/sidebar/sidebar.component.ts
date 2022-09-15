import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

// MatTree Imports
import { FlatTreeControl, NestedTreeControl, TreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Each node has a name and an optional list of children.
 */
interface TreeData {
  name: string;
  children?: TreeData[];
}

const TREE_DATA: TreeData[] = [
  {
    name: 'Channels',
    children: [{ name: 'html/css' }, { name: 'javascript' }, { name: 'angular' }],
  },
  {
    name: 'Direct messages',
    children: [{ name: 'Chris Aidelsburger' }, { name: 'Pascal Steffen' }, { name: 'Samuel Bergen' }],
  }
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {

  private _transformer = (node: TreeData, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  @ViewChild('tree') tree: any;

  ngAfterViewInit(): void {
    this.tree.treeControl.expandAll();
  }

  add(nodeName: string) {

  }
}
