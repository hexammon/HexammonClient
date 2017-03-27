import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from "./routing.module";
import { GridComponent } from "./components/grid/grid.component";
import { ThresholdComponent } from "./components/thrashold/threshold.component";

@NgModule({
    declarations: [
        AppComponent,
        GridComponent,
        ThresholdComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
