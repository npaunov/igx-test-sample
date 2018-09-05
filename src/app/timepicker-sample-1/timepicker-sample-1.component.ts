import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTimePickerComponent, IgxDatePickerComponent } from "igniteui-angular";

@Component({
    selector: "app-timepicker",
    styleUrls: ["./timepicker-sample-1.component.scss"],
    templateUrl: "./timepicker-sample-1.component.html"
})
export class TimePickerSample1Component implements OnInit {
    @ViewChild('date1', { read: IgxDatePickerComponent })
    public date1: IgxDatePickerComponent;

    constructor() { }

    customitemsDelta = {hours: 2, minutes: 15}
    public date: Date = new Date(2018, 11, 11, 7, 7);


    @ViewChild('myTime', { read: IgxTimePickerComponent })
    public myTime: IgxTimePickerComponent;
  

    public ngOnInit(): void {}

    public myDate: Date = new Date(2001, 1, 1)

    public onClick(): void {
        alert(this.myTime.value)
    }

    buttonClick(){
        console.log(this.date1.value)

    }
}
