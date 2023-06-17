import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  localizaCep(cod: string) {
    const url = `https://viacep.com.br/ws/${cod}/json/`;

    const header = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.get(url, header).toPromise();
  }
}
