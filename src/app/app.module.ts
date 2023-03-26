import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF,registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductoService } from './produtos/produtos.service';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListarProdutosComponent
  ],
  imports: [
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})],
    HttpClientModule, 
    BrowserModule,
     FormsModule
  ],
  providers: [
    ProductoService,
    {provide: APP_BASE_HREF,useValue:'/'} //link base da aplicação
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
