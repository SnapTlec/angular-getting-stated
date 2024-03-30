import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/interface/pensamento';
import { PensamentoService } from '../servico/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento : Pensamento = {
    conteudo : "",
    autoria : "",
    modelo : "modelo1"
  }
  
  constructor(
    private pensametoService : PensamentoService,
    private router : Router
  
   ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.pensametoService.criarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    });
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamentos']);
  }

}
