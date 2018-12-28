import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import { Company } from '../classes/company';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'api/companyData/';

  // BASE_URL: string = "http://www.mocky.io/v2/5c24ce8d30000055007a618d/";
  endpoint = "companyData";

  constructor(private httpClient: HttpClient, private http: Http) { }
  // BASE_URL: string = 'http://localhost:3000/companyData/';

  getColumns(): string[] {
    return ['Company Name', 'Status', 'Financial Performance', 'Key Contacts', 'Edit/Delete']
  }

  // getAllData(){
  //   return this.httpClient.get(this.BASE_URL)
  // }

  // getCompanyData(id) {
  //   return this.httpClient.get(this.BASE_URL + id)
  // }

  getMockyData(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.BASE_URL)
  }

  getAllData(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.BASE_URL)
  }

  getCompanyById(id: number) {
    return this.httpClient.get<Company>(this.BASE_URL + id)
  }

  updateCompany(company: Company) {
    return this.httpClient.put(this.BASE_URL + company.id, company)
  }

  removeCompany(id: number) {
    return this.httpClient.delete(this.BASE_URL + id)
  }

  createCompany(company: Company) {
    return this.httpClient.post(this.BASE_URL, company)
  }

  

}
