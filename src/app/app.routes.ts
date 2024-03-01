import { Routes } from '@angular/router';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ReservarComponent } from './componentes/reservar/reservar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
    { path: 'cadastrar', component: CadastrarComponent },
    { path: 'reservar', component: ReservarComponent },
];
