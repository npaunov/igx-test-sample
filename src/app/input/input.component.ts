import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    
    public userFullName: string;

    constructor() { }

    ngOnInit() {
    }

    public updateFullName() {
        this.userFullName = 'Goyko1111111';
    }

    public reset() {
        this.userFullName = "";
    }
}
