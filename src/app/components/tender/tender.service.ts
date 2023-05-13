import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ITender} from "./tender";
@Injectable()
export class TenderService {
  constructor(private http: HttpClient) {
  }

  getTenders(): Observable<ITender[]> {
    return this.http.get<ITender[]>("http://localhost:5090/api/Tenders/GetTender");
  }

  searchTenders(name: string): Observable<ITender[]> {
    return this.http.get<ITender[]>(`http://localhost:5090/api/Tenders/GetTendersName/${name}`)
  }
}
