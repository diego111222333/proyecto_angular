import { Routes } from '@angular/router';
import {Home} from './componentes/home/home';
import { Chuquisaca } from './paginas/danzas/chuquisaca/chuquisaca';
import { Oruro } from './paginas/danzas/oruro/oruro';
import { Tarija } from './paginas/danzas/tarija/tarija';
import { Lapaz } from './paginas/danzas/lapaz/lapaz';
import { Cochabamba } from './paginas/danzas/cochabamba/cochabamba';
import { Beni } from './paginas/danzas/beni/beni';
import { Pando } from './paginas/danzas/pando/pando';
import { Potosi } from './paginas/danzas/potosi/potosi';
import { Santacruz } from './paginas/danzas/santacruz/santacruz';
import { Historia } from './paginas/historia/historia';
import { Gruposflolkloricos } from './paginas/gruposflolkloricos/gruposflolkloricos';
import { Contacto } from './paginas/contacto/contacto';
import { Nosotros } from './paginas/nosotros/nosotros';
export const routes: Routes = [
    {path:"",component:Home},
    {path:"chuquisaca",component:Chuquisaca},
    {path:"oruro",component:Oruro},
    {path:"tarija",component:Tarija},
    {path:"lapaz",component:Lapaz},
    {path:"cochabamba",component:Cochabamba},
    {path:"beni",component:Beni},
    {path:"pando",component:Pando},
    {path:"potosi",component:Potosi},
    {path:"santacruz",component:Santacruz},
    {path:"historia",component:Historia},
    {path:"grupos",component:Gruposflolkloricos},
    {path:"contacto",component:Contacto},
    {path:"nosotros",component:Nosotros},
    {path:"**",redirectTo:""}
];
