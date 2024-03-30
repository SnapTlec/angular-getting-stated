import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from '../pensamento/interface/pensamento';
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'
  constructor(private http : HttpClient) { }

  listarPensamentos() : Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  criarPensamento(pensamento : Pensamento) : Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }
}
