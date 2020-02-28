import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ViewCodeComponent } from './view-code/view-code.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponentComponent,
    HomeComponent,
    D3ChartsComponent,
    SpinnerComponent,
    ViewCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
