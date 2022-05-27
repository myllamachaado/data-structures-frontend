import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Data } from '../data-structures/data';
import { Res } from '../data-structures/res';

@Injectable({ providedIn: 'root' })
export class DataStructuresService {

  private apiServerUrl = environment.BASE_URL;

  constructor(private http: HttpClient){ }

  public enviaDadosEntrada(data : Data) : Observable<Res> {
    console.log(data);
    return this.http.post<Res>(`${this.apiServerUrl}/`, data);
  }
  
}
