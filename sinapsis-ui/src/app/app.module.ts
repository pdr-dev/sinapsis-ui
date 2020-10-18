import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncluirComponentComponent } from './component/incluir-component/incluir-component.component';
import { TableSubestacaoComponentComponent } from './component/table-subestacao-component/table-subestacao-component.component';
import { TableRedeComponentComponent } from './component/table-rede-component/table-rede-component.component';
import { SubestacaoComponentComponent } from './component/subestacao-component/subestacao-component.component';
import { RedeComponentComponent } from './component/rede-component/rede-component.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { MenuComponentComponent } from './component/menu-component/menu-component.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IncluirComponentComponent,
    TableSubestacaoComponentComponent,
    TableRedeComponentComponent,
    SubestacaoComponentComponent,
    RedeComponentComponent,
    HeaderComponentComponent,
    MenuComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
