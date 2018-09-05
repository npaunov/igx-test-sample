import { Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from './data';
import {
  IgxDialogComponent, IgxGridComponent, 
  CloseScrollStrategy,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IgxDropDownComponent,
  VerticalAlignment,
  IgxSnackbarComponent
} from 'igniteui-angular';
import { Record } from './record';

@Component({
  selector: 'color-picker-sample',
  templateUrl: './color-picker-sample.html',
  styleUrls: ['./color-picker-sample.scss']
})
export class ColorPickerSampleComponent implements OnInit {
  public data: any[] = DATA;
  public record;
  @ViewChild('dialogAdd', { read: IgxDialogComponent })
  public dialog: IgxDialogComponent;

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid1: IgxGridComponent;

  @ViewChild('snackbar')
  public snackbar: IgxSnackbarComponent;


  public title = 'Samples';
  public gridTheme = 'light-theme-grid';
  public buttons = [{ color: 'light', primary: '#f8f8f8', secondary: '#4169E1' },
  { color: 'dark', primary: '#282828', secondary: '#FFA500' }];

  private _positionSettings = {
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Bottom
  };

  private _overlaySettings = {
    closeOnOutsideClick: true,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
    scrollStrategy: new CloseScrollStrategy()
  };

  ngOnInit() {
    this.data = DATA;
    this.record = new Record();
  }

  public removeRow(rowIndex) {
    const row = this.grid1.getRowByIndex(rowIndex);
    row.delete();
    this.snackbar.message = 'Row with index ' + row.index + ' has been deleted!';
    this.snackbar.show();
  }

  public addRow() {
    this.grid1.addRow(this.record);
    this.cancel();

  }
  public cancel() {
    this.dialog.close();
    this.record = new Record();
  }
  public toggleDropDown(eventArgs, selectedDropDown: IgxDropDownComponent) {
    const dropDown = selectedDropDown;
    this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
    dropDown.toggle(this._overlaySettings);
  }

  public setTheme(value: string, component: any, componentTheme: any) {
    debugger;
    let theme = '';
    switch (value) {
      case 'light':
        theme = 'light-theme' + '-' + `${component}`;
        this[componentTheme] = theme;
        break;
      case 'dark':
        theme = 'dark-theme' + '-' + `${component}`;
        this[componentTheme] = theme;
        break;
    }
  }
}
