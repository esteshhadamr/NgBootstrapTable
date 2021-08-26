import { Component } from '@angular/core';
import { COUNTRIES, Country } from '../countries';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';

@Component({
    selector: 'ngbd-table-pagination',
    template: `
    <ngb-pagination [collectionSize]="(total$ | async)!" [(page)]="service.page" [pageSize]="service.pageSize" 
    (pageChange)="refreshCountries()">
        </ngb-pagination>
 
`,
    providers: [CountryService]

})

export class NgbdTablePagination {

    // countries$: Observable<Country[]>;
    countries$: any;
    total$: Observable<number>;

    constructor(public service: CountryService) {
        this.countries$ = service.countries$;
        this.total$ = service.total$;

    }

    // page = 1;
    // pageSize = 4;
    // collectionSize = COUNTRIES.length;
    //  countries: Country[];
    countries!: Country[];

    refreshCountries() {
        console.log(this.service);

    }
}