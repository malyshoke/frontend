import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICompany} from "./company";
import {Observable} from "rxjs";

@Injectable()
export class CompanyService{

  constructor(private http: HttpClient){}

  getCompanyById(id: number): Observable<ICompany>
  {
    return this.http.get<ICompany>("http://localhost:5090/api/Companies/GetCompany/" + String(id));
  }
}
