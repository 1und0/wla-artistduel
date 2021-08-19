import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class SearchValueService {


  private searchTerm = new Subject<string>();
  searchValue$ = this.searchTerm.asObservable();

    searchValue(term: string) {
        //console.log(term);
        this.searchTerm.next(term);
    }
}
