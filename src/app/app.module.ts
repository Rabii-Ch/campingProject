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
    GuidesComponent
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
