import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {SimpleHTTPComponent} from './SimpleHTTP/SimpleHTTPComponent'


@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPComponent
    
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent ]
})
export class AppModule {
}
