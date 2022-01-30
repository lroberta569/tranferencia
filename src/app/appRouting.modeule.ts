import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { NovaTransferenciaComponent } from './novaTransferencia/novaTranferencia.component';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full' },
  {path: 'extrato', component: ExtratoComponent },
  {path: 'novaTransferencia', component: NovaTransferenciaComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
