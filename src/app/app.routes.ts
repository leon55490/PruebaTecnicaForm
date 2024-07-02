import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pagina/index/index.component';
import { NgModule } from '@angular/core';
import { RespuestaComponent } from './pagina/respuesta/respuesta.component';



export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'respuesta', component: RespuestaComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
