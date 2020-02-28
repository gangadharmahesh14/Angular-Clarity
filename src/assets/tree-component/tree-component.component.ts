import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent implements OnInit {
  public inventoty: any = [
    {
      "node": "Datacenter1",
      "id": "datacenter-1",
      "lable": "Datacenter1",
      "items": [
        {
          "node": "cluster",
          "id": "cluster-2",
          "lable": "cluster-01",
          "selected": 0,
          "items": [
            {
              "node": "host",
              "id": "host-2",
              "lable": "Host-1",
              "selected": 0
            },
            {
              "node": "host",
              "id": "host-2",
              "lable": "Host-1",
              "selected": 0
            }
          ]
        }]
    },
    {
	  "node": "DC-2",
      "id": "datacenter-2",
      "lable": "Datacenter-2",
      "items": [
        {
          "node": "cluster",
          "id": "cluster-3",
          "lable": "New Cluster",
          "selected": 0,
          "items": [
            {
              "node": "host",
              "id": "host-2",
              "lable": "172.21.157.120",
              "selected": 0
            },
            {
              "node": "host",
              "id": "host-2",
              "lable": "172.21.157.120",
              "selected": 0
            }
            
          ]
        }]
    },
  
  ];

  public selectedTree: any = [];
  public treeData: any = [];
 
  onChange(event) {
    this.treeData = [];
    this.treeData = JSON.parse(JSON.stringify(this.selectedTree));
  }

  constructor() { }

  ngOnInit() { }

}
