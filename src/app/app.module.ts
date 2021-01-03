import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuideComponent } from './component/guide/guide.component';
import { CircuitComponent } from './component/circuit/circuit.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddGuideComponent } from './component/add-guide/add-guide.component';
import { AddCircuitComponent } from './component/add-circuit/add-circuit.component';
import { EditGuideComponent } from './component/edit-guide/edit-guide.component';
import { DisplayGuideComponent } from './component/display-guide/display-guide.component';
import { EditCircuitComponent } from './component/edit-circuit/edit-circuit.component';
import { DisplayCircuitComponent } from './component/display-circuit/display-circuit.component';
import { PannierComponent } from './component/pannier/pannier.component';
import { MaterielComponent } from './component/materiel/materiel.component';
import { GuidesComponent } from './component/guides/guides.component';
import { AddMaterielComponent } from './component/add-materiel/add-materiel.component';
import { EditMaterielComponent } from './component/edit-materiel/edit-materiel.component';
import { DisplayMaterielComponent } from './component/display-materiel/display-materiel.component';
import { CircuitsComponent } from './component/circuits/circuits.component';
import { MaterielsComponent } from './component/materiels/materiels.component';
import { AdminCircuitComponent } from './component/admin-circuit/admin-circuit.component';
import { AdminGuideComponent } from './component/admin-guide/admin-guide.component';
import { AdminUserComponent } from './component/admin-user/admin-user.component';
import { AdminMaterielComponent } from './component/admin-materiel/admin-materiel.component';
import { ReservationMaterielComponent } from './component/reservation-materiel/reservation-materiel.component';
import { FactureComponent } from './component/facture/facture.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    GuideComponent,
    CircuitComponent,
    AdminComponent,
    AddGuideComponent,
    AddCircuitComponent,
    EditGuideComponent,
    DisplayGuideComponent,
    EditCircuitComponent,
    DisplayCircuitComponent,
    PannierComponent,
    MaterielComponent,
    GuidesComponent,
    AddMaterielComponent,
    EditMaterielComponent,
    DisplayMaterielComponent,
    CircuitsComponent,
    MaterielsComponent,
    AdminCircuitComponent,
    AdminGuideComponent,
    AdminUserComponent,
    AdminMaterielComponent,
    ReservationMaterielComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
