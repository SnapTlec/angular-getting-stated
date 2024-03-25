import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      id: "1",
      conteudo : "Aprendendo Angular",
      autoria : "Dev",
      modelo : "modelo2"
    },
    {
      id: "1",
      conteudo : "Aprendendo Angular",
      autoria : "Dev2",
      modelo : "modelo1"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
