import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from '../pensamento/interface/pensamento';
import { PensamentoService } from '../servico/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css']
})
export class ExcluirPensamentosComponent implements OnInit {

  pensamento : Pensamento = {
    id : 0,
    conteudo : "",
    modelo : "",
    autoria : ""
  }
  constructor(
    private pensamentoService : PensamentoService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pensamentoService.buscarPensamentoPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() : void{
    if(this.pensamento)
    {
      this.pensamentoService.excluirPensamento(this.pensamento.id!.toString()).subscribe(() =>{
        this.router.navigate(['listarPensamentos'])
      })
    }

  }

  cancelar()
  {
    this.router.navigate(['listarPensamentos'])
  }

  

}
