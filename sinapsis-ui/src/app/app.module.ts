import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableSubestacaoComponentComponent } from './component/table-subestacao-component/table-subestacao-component.component';
import { TableRedeComponentComponent } from './component/table-rede-component/table-rede-component.component';
import { SubestacaoComponentComponent } from './component/subestacao-component/subestacao-component.component';
import { RedeComponentComponent } from './component/rede-component/rede-component.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { MostrarDialogComponent } from './component/mostrar-dialog/mostrar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSubestacaoComponentComponent,
    TableRedeComponentComponent,
    SubestacaoComponentComponent,
    RedeComponentComponent,
    HeaderComponentComponent,
    MenuComponentComponent,
    LoginComponentComponent,
    MostrarDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,

    TabMenuModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    DynamicDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
