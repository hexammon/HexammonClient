import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Hexammon';
    rowsNumber: number = 6;

    getNumberOfRowsPairAsArray(): Array<number> {
        return new Array(this.rowsNumber);
    }
}
