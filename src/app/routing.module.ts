import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from "./components/grid/grid.component";
import { ThresholdComponent } from "./components/thrashold/threshold.component";

const routes: Routes = [
    { path: 'threshold', component: ThresholdComponent },
    { path: 'game', component: GridComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {
}
