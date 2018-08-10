import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-input-reactive',
    templateUrl: './input-reactive.component.html',
    styleUrls: ['./input-reactive.component.css']
})
export class InputReactiveComponent {

    fullNameForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.fullNameForm = this.fb.group({
            fullName: ['', Validators.required]
        });
    }

    public updateFullName() {
        this.fullNameForm.setValue({ fullName: 'Goyko1111111' });
    }

    public reset() {
        this.fullNameForm.setValue({ fullName: '' });
    }
}
