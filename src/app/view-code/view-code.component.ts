import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-code',
  templateUrl: './view-code.component.html',
  styleUrls: ['./view-code.component.css']
})
export class ViewCodeComponent implements OnInit {

  private fileTypeSwitches: any = [
    {name: 'TS', value: 'ts', isChecked: true},
    {name: 'HTML', value: 'html', isChecked: false},
    {name: 'CSS', value: 'css', isChecked: false},
  ];
  private fileContent: any;
  private selectedSwitchType: any = this.fileTypeSwitches[0];
  private pageUrl: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.pageUrl = router.url;
  }

  ngOnInit() {
    const filePath: string = this.getFilename();
    this.readFile(filePath);
  }

  getFilename (): string {
    let filePath = '';
    switch (this.pageUrl) {
      case '/inventory':
        filePath = "assets/tree-component/tree-component.component." + this.selectedSwitchType.value;
        break;
      case '/charts':
        filePath = "assets/d3-charts/d3-charts.component." + this.selectedSwitchType.value;
        break;
      case '/spinners':
        filePath = "assets/spinner/spinner.component." + this.selectedSwitchType.value;
        break;
      default:
        filePath = "assets/1.txt";
        break;
    }
    return filePath;
  }

  changeFileType (event, node, fileTypeSwitches) {
    const checkState = event.target.checked;
    if (checkState || true) {
      fileTypeSwitches.forEach(element => {
        if (element.name === node.name) {
          element.isChecked = true;
          this.selectedSwitchType = element;
        } else {
          element.isChecked = false;
        }
      });
    }
    const filePath: string = this.getFilename();
    this.readFile(filePath);
  }

  readFile (path): any {
    this.http.get(path, { responseType: 'text' }).subscribe(data => {
      this.fileContent = data;
    })
  }

}
