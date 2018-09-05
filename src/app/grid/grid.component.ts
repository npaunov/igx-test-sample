import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { employeesData } from './localData';
import { IgxGridComponent, IgxToggleModule, FilteringLogic, IgxStringFilteringOperand, FilteringExpressionsTree, IgxDateFilteringOperand, IgxBooleanFilteringOperand,
    IgxNumberFilteringOperand, 
    OverlaySettings,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxToggleDirective} from 'igniteui-angular';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
    public localData: any[];
    title = 'Grid';
    private _overlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(),
        modal: false,
        closeOnOutsideClick: true
    };
    
    @ViewChild(IgxToggleDirective, { read: IgxToggleDirective })
    protected toggleDirective: IgxToggleDirective;
    
    constructor() {
        }

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid1: IgxGridComponent;

    

    ngOnInit() {
        this.localData = employeesData;

        // var myFieldName = 'IsActive';

        // var gridfilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.Or);

        // var filteringExpressionsTreeCol1 = new FilteringExpressionsTree(FilteringLogic.Or, myFieldName);
        // var expression = { fieldName: myFieldName, condition: IgxBooleanFilteringOperand.instance().condition('true'), ignoreCase: true };
        // var expression1 = { fieldName: myFieldName, condition: IgxBooleanFilteringOperand.instance().condition('null'), ignoreCase: true };
        // filteringExpressionsTreeCol1.filteringOperands.push(expression);
        // filteringExpressionsTreeCol1.filteringOperands.push(expression1);
        // gridfilteringExpressionsTree.filteringOperands.push(filteringExpressionsTreeCol1);
        // this.grid1.filteringExpressionsTree = gridfilteringExpressionsTree;



        // var myFieldName = 'RegistererDate';

        // var gridfilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);

        // var filteringExpressionsTreeCol1 = new FilteringExpressionsTree(FilteringLogic.And, myFieldName);
        // var expression = { fieldName: myFieldName, searchVal: new Date('01/31/2018'), condition: IgxDateFilteringOperand.instance().condition('after'), ignoreCase: true };
        // var expression1 = { fieldName: myFieldName, searchVal: new Date('12/01/2018'), condition: IgxDateFilteringOperand.instance().condition('before'), ignoreCase: true };
        // filteringExpressionsTreeCol1.filteringOperands.push(expression);
        // filteringExpressionsTreeCol1.filteringOperands.push(expression1);
        // gridfilteringExpressionsTree.filteringOperands.push(filteringExpressionsTreeCol1);
        // this.grid1.filteringExpressionsTree = gridfilteringExpressionsTree;


        // var myFieldName = 'LastName';

        // var gridfilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.Or);

        // var filteringExpressionsTreeCol1 = new FilteringExpressionsTree(FilteringLogic.Or, myFieldName);
        // var expression = { fieldName: myFieldName, searchVal: '1', condition: IgxStringFilteringOperand.instance().condition('contains'), ignoreCase: true };
        // var expression1 = { fieldName: myFieldName, searchVal: '2', condition: IgxStringFilteringOperand.instance().condition('contains'), ignoreCase: true };
        // filteringExpressionsTreeCol1.filteringOperands.push(expression);
        // filteringExpressionsTreeCol1.filteringOperands.push(expression1);
        // gridfilteringExpressionsTree.filteringOperands.push(filteringExpressionsTreeCol1);
        // this.grid1.filteringExpressionsTree = gridfilteringExpressionsTree;


        // var myFieldName = 'Age';

        // var gridfilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);

        // var filteringExpressionsTreeCol1 = new FilteringExpressionsTree(FilteringLogic.And, myFieldName);
        // var expression = { fieldName: myFieldName, searchVal: 10, condition: IgxNumberFilteringOperand.instance().condition('greaterThan'), ignoreCase: true };
        // var expression1 = { fieldName: myFieldName, searchVal: 400000, condition: IgxNumberFilteringOperand.instance().condition('lessThan'), ignoreCase: true };
        // filteringExpressionsTreeCol1.filteringOperands.push(expression);
        // filteringExpressionsTreeCol1.filteringOperands.push(expression1);
        // gridfilteringExpressionsTree.filteringOperands.push(filteringExpressionsTreeCol1);
        // this.grid1.filteringExpressionsTree = gridfilteringExpressionsTree;

    }

    onClear(ev) {
        this.grid1.clearFilter();
    }

    public onIconClick(eventArgs): void {
        requestAnimationFrame(() => {

            this._overlaySettings.positionStrategy.settings.horizontalDirection = HorizontalAlignment.Left;
            this._overlaySettings.positionStrategy.settings.horizontalStartPoint = HorizontalAlignment.Right;


            this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
            this.toggleDirective.toggle(this._overlaySettings);
        });
    }

    f(event) {
        debugger;
        console.log(event);
    }
}
