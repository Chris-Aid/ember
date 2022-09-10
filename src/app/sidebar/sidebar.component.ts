import { Component, OnInit } from '@angular/core';

// MatTree Imports
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

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


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  treeControl = new NestedTreeControl<TreeData>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeData>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: TreeData) => !!node.children && node.children.length > 0;

}
