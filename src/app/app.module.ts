// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { NgbdSortableHeader } from './components/sortable.directive';
import { TableCompleteModule } from './components/table-Complete/table.Complete.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from './components/country.service';
@NgModule({
  declarations: [
    AppComponent,
    // NgbdSortableHeader
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableCompleteModule,
    NgbModule
  ],
  providers: [
    DecimalPipe,
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
