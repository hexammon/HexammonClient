import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from "./components/grid/grid.component";

const routes: Routes = [
    { path: '', redirectTo: '/threshold', pathMatch: 'full' },
    { path: 'game', component: GridComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {
}
