import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { Heroes } from 'src/model/heroesModel';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(baseUrl);
  }
  public getAllActive(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${baseUrl}?active=true`);
  }

  public getAllInactive(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${baseUrl}?active=false`);
  }

  public getById(id: number): Observable<Heroes> {
    return this.http.get<Heroes>(`${baseUrl}/${id}`);
  }

  public modify(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  public create(data: any): Observable<Heroes> {
    return this.http.post<Heroes>(baseUrl, data);
  }
}




