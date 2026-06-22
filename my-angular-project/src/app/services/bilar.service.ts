import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BilarService { 
  private apiUrl = 'http://localhost:5000/bilar';  

  constructor(private http: HttpClient) {}

  getBilar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
