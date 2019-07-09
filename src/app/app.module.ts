import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CabezeraComponent } from './componentes/cabezera/cabezera.component';
import { ConsultaTiquetesComponent } from './componentes/consulta-tiquetes/consulta-tiquetes.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { RegistroTiqueteComponent } from './componentes/registro-tiquete/registro-tiquete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule, PanelModule } from 'primeng/primeng';
import { DropdownModule} from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabezeraComponent,
    ConsultaTiquetesComponent,
    PiePaginaComponent,
    RegistroTiqueteComponent,
  ],
  imports: [
    AccordionModule.forRoot(),  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, BrowserModule, InputTextareaModule, FormsModule, PanelModule, DropdownModule, TableModule,
    MessageModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
