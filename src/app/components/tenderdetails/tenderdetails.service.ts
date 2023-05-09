import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ITender} from "./tenderdetails";
@Injectable()
export class TenderdetailsService {
  constructor(private http: HttpClient) {
  }

  getTenderById(id: number): Observable<ITender> {
    return this.http.get<ITender>(`http://localhost:5090/api/Tenders/GetTender/${id}`).pipe(
      tap((response) => console.log(response))
    );
  }


}
