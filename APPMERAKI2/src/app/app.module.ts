
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContenidoComponent } from './components/contenido/contenido.component';
/* Angular Material */
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
/* import { Rutas } from './app.routes'; */
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';
import { ChartsModule } from 'ng2-charts'
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ChartComponent } from './components/chart/chart.component';
import { Chart2Component } from './components/chart2/chart2.component'
/* Angularx-Social */
@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    SidenavComponent,
    LoginComponent,
    BienvenidosComponent,
    ChartComponent,
    Chart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config),
    ChartsModule,
    ReactiveFormsModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
