import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/interface/pensamento';
import { PensamentoService } from '../servico/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamentos',
  templateUrl: './editar-pensamentos.component.html',
  styleUrls: ['./editar-pensamentos.component.css']
})
export class EditarPensamentosComponent implements OnInit {

  pensamento : Pensamento = {
    id : 0,
    conteudo : '',
    autoria : '',
    modelo : ''
  }
  constructor(
    private pensamentoServico : PensamentoService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.pensamentoServico.buscarPensamentoPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() : void {
    if(this.pensamento){
      this.pensamentoServico.editarPensamento(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamentos'])
      })
    }
  }

  cancelar() : void {
    this.router.navigate(['/listarPensamentos'])
  }

}
