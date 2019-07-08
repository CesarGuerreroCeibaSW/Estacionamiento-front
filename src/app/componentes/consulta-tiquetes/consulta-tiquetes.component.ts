import { Component, OnInit } from '@angular/core';
import { EstacionamientoService } from '../../Servicios/estacionamiento.service';
import { Tiquete } from '../../Modelos/tiquete'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-consulta-tiquetes',
  templateUrl: './consulta-tiquetes.component.html',
  styleUrls: ['./consulta-tiquetes.component.css']
})
export class ConsultaTiquetesComponent implements OnInit {
  
  fecha: Date;
  tiquetes: Tiquete[];
  constructor(private estacionamiento: EstacionamientoService,private toast:ToastrService) { }

  ngOnInit() {
    this.fecha = new Date();
    this.listarTiquetes();
  }

  listarTiquetes() {
    this.estacionamiento.listarTiquetes()
      .subscribe(res => {
        this.tiquetes = res as Tiquete[];
      }, err => {
        this.toast.error(err,"error al listar vehiculos:");
      });
  }

  registrarSalidaTicket(placa) {
    this.estacionamiento.registrarSalida(placa).subscribe(
      res => {
        if(res){
          this.toast.success("se registro la salida del vehiculo: " + placa + ", con un costo de :" + res['value'],"Salida del estacionamiento:");
          this.listarTiquetes();
        }else{
          this.toast.error("ocurrio un error al registrar salida");
        }
      }, err => {
        this.toast.error(err,"Error al salir:");
      });
  }




}
