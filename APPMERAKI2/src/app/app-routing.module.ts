import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ChartComponent } from './components/chart/chart.component';
import { Chart2Component } from './components/chart2/chart2.component';

const routes: Routes = [
  {
    path:'',
    component:BienvenidosComponent
  },
  {
    path:'bienvenidos',
    component:BienvenidosComponent
  },
  {
    path:'contenido/sidenav',
    component:SidenavComponent,canActivate:[AuthGuard]
  },
  {
    path:'contenido',
    component:ContenidoComponent,canActivate:[AuthGuard]
  },
  {
    path:'sidenav',
    component:SidenavComponent,canActivate:[AuthGuard]
  },
  {
    path:'chart',
    component:ChartComponent
  },
  {
    path:'chart2',
    component:Chart2Component
  },
  {
    path:'login',
    component:LoginComponent,canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
