import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from '../pensamento/interface/pensamento';
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = process.env['BACKEND']!
  constructor(private http : HttpClient) { }

  listarPensamentos() : Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  criarPensamento(pensamento : Pensamento) : Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluirPensamento(id : string) : Observable<Pensamento>{
    const url : string = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  editarPensamento(pensamento : Pensamento) : Observable<Pensamento>{
    const url : string = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  buscarPensamentoPorId(id : Number) : Observable<Pensamento>{
    const url : string = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
