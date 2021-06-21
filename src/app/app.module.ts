import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarComponent } from "./components/views/cadastrar/cadastrar.component";
import { ListarComponent } from "./components/views/listar/listar.component";

@NgModule({
  declarations: [AppComponent, ListarComponent, CadastrarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
