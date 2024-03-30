import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentosComponent } from './componentes/pensamentos/excluir-pensamentos/excluir-pensamentos.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "listarPensamentos",
    pathMatch: "full"
  },
  {
    path: "criarPensamento",
    component: CriarPensamentosComponent
  },
  {
    path: "listarPensamentos",
    component: ListarPensamentosComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentosComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
