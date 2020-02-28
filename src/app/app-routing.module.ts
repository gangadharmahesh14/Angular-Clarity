import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'inventory' , component: TreeComponentComponent},
  {path: 'charts' , component: D3ChartsComponent},
  {path: 'spinners' , component: SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
