import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstacionamientoService } from '../../servicios/estacionamiento.service';
import { Tiquete } from '../../Modelos/tiquete'
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registro-tiquete',
  templateUrl: './registro-tiquete.component.html',
  styleUrls: ['./registro-tiquete.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RegistroTiqueteComponent implements OnInit {
  todoForm: FormGroup;
  cilindraje: boolean;
  tipos = [];
  tiquete: Tiquete;
  ngOnInit() {
    this.tiquete = new Tiquete;
    this.tipos.push({ label: 'CARRO', value: { id: 0, name: 'CARRO' } });
    this.tipos.push({ label: 'MOTO', value: { id: 1, name: 'MOTO' } });
     this.inicializarFormulario();
     this.activarCilindraje();
  }
 
  constructor(private confirmationService: ConfirmationService, private service: MessageService, private formBuilder: FormBuilder,
    private estacionamiento: EstacionamientoService,private toast:ToastrService) { }

  get tipoVehiculo() {
    return this.todoForm.get('tipoVehiculo');
  }

  inicializarFormulario(){
    this.todoForm = this.formBuilder.group({
      placa: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z-0-9]*$/)]],
      cilindrajeMayor500: '',
      tipoVehiculo: ''
    });
  }

  activarCilindraje() {
    const tipoVehiculo = this.todoForm.get('tipoVehiculo');  
    tipoVehiculo.valueChanges.subscribe(type => {
      if (type === "0") {
        this.cilindraje = false;
        this.todoForm.get('cilindrajeMayor500').setValidators(null);
        this.tiquete.tipoVehiculo = "CARRO";
      }
      if (type === "1") {
        this.cilindraje = true;
        this.tiquete.tipoVehiculo = "MOTO";
        this.todoForm.get('cilindrajeMayor500').setValidators([Validators.required]);
      }
    
    })

  }

  validarTexto() {
    var nuevo = this.tiquete.placa.replace(/[^a-z-A-Z0-9]+/g, "");
    this.tiquete.placa = nuevo.toUpperCase();
  }

  registrarTiquete() {
    this.tiquete.fechaIngreso = new Date();
    this.estacionamiento.registrarTiquete(this.tiquete).subscribe(
      res => {
        if(res){
          this.toast.success("se registro la entrada del vehiculo: " + res['value']['placa'] + ", con exito","Registro de entrada");
          this.limpiarFormulario();
        }
      }, err => {
        this.toast.error(err,"Error al ingresar:");
      });
  }

  limpiarFormulario(){
    this.tiquete = new Tiquete();
    this.todoForm.get('cilindrajeMayor500').setValidators(null);
  }

}
