import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTablePagination } from './pagination';
import { NgbdTableComplete } from './table-Complete.component';
import { NgbdSortableHeader } from '../sortable.directive';
import { CountryService } from '../country.service';


@NgModule({
    declarations: [
        // AppComponent,
        NgbdTablePagination,
        NgbdTableComplete,
         NgbdSortableHeader
    ],

    imports: [
        // AppRoutingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    exports: [NgbdTablePagination, NgbdTableComplete],
    //bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class TableCompleteModule { }