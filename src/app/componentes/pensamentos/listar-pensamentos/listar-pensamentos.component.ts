import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/interface/pensamento';
import { PensamentoService } from '../servico/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos : Pensamento[] = [];
  constructor(private pensamentoService : PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listarPensamentos().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}



