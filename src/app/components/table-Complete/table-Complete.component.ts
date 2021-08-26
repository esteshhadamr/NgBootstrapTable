import { DecimalPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../countries';
import { CountryService } from '../country.service';
import { NgbdSortableHeader, SortEvent } from '../sortable.directive';


@Component(
  {
    selector: 'ngbd-table-complete',
    templateUrl: './table-Complete.component.html'
  })
export class NgbdTableComplete implements AfterViewInit {
  // countries$: Observable<Country[]>;
  countries$!: any;
  // countries$!:Country[];
  total$!: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService, private cdRef: ChangeDetectorRef) {
    // service.countries$.subscribe((countries)=>{
    //   console.log(countries);
    //   this.countries$ =countries

    //  }, error=>{
    //    console.log(error);
    //  });
    this.countries$ = service.countries$;

    this.total$ = service.total$;
  }
  ngAfterViewInit() {


  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
