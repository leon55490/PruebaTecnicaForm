import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pagina/index/index.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
