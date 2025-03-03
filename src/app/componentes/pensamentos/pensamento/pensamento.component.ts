import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './interface/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento : Pensamento = {
    id: 1,
    conteudo : "Aprendendo Angular",
    autoria : "Dev",
    modelo : "modelo1"
  }

  larguraPensamento() : string{
    if(this.pensamento.conteudo.length > 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
