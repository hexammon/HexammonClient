import { Component } from "@angular/core";

@Component({
    selector: 'threshold-component',
    templateUrl: 'threshold.html',
    styleUrls: ['threshold.css']
})
export class ThresholdComponent {
    rooms: Array<string> = ['First room', 'Second room', 'Third room'];
}
