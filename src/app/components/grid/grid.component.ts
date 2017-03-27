import { Component } from "@angular/core";

@Component({
    selector: 'grid-component',
    templateUrl: 'grid.html',
    styleUrls: ['grid.css']
})
export class GridComponent {
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
