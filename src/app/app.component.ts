import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Hexammon';
    rowsNumber: number = 14;

    getNumberOfRowsPairAsArray(): Array<number> {
        return this.numberToArray(this.rowsNumber);
    }

    numberToArray(arrayLength: number): Array<number> {
        return new Array(arrayLength);
    }

    debug(string) {
        console.log(string)
    }
}
