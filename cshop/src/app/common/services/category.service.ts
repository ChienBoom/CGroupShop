import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CategoryService extends BaseService {

  private domain = environment.apiUrl;
  private apiUrl = `${this.domain}/api/category`;

  constructor(http: HttpClient) {
    super(http);
  }

  // getCategories(): Observable<any> {
  //   return this.get<any>(this.apiUrl);
  // }
  // getCategoryId(id: string): Observable<any> {
  //   return this.get<any>(`${this.apiUrl}/${id}`);
  // }

  // createCategory(category: any): Observable<any> {
  //   return this.post<any>(this.apiUrl, category);
  // }

  // updateCategory(id: string, category: any): Observable<any> {
  //   return this.put<any>(`${this.apiUrl}/${id}`, category);
  // }

  // deleteCategory(id: string): Observable<any> {
  //   return this.delete<any>(`${this.apiUrl}/${id}`);
  // }

  // getCategories(){

  // }
}
