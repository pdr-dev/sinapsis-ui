import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';

import { AppComponent } from './app.component';
import { TableSubestacaoComponentComponent } from './component/table-subestacao-component/table-subestacao-component.component';
import { TableRedeComponentComponent } from './component/table-rede-component/table-rede-component.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { MostrarDialogComponent } from './component/mostrar-dialog/mostrar-dialog.component';
import { RedeIncluirComponent } from './component/rede-incluir/rede-incluir.component';
import { RedeEditarComponent } from './component/rede-editar/rede-editar.component';
import { SubestacaoIncluirComponent } from './component/subestacao-incluir/subestacao-incluir.component';
import { SubestacaoEditarComponent } from './component/subestacao-editar/subestacao-editar.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'subestacoes', component: TableSubestacaoComponentComponent },
  { path: 'subestacao-incluir', component: SubestacaoIncluirComponent },
  { path: 'subestacao-editar', component: SubestacaoEditarComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TableSubestacaoComponentComponent,
    TableRedeComponentComponent,
    HeaderComponentComponent,
    MenuComponentComponent,
    LoginComponentComponent,
    MostrarDialogComponent,
    RedeIncluirComponent,
    RedeEditarComponent,
    SubestacaoIncluirComponent,
    SubestacaoEditarComponent
  ],
  entryComponents: [
    MostrarDialogComponent, 
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    DynamicDialogModule,
    FieldsetModule,
    BreadcrumbModule
  ],
  providers: [MessageService, DialogService, DynamicDialogRef, DynamicDialogConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }