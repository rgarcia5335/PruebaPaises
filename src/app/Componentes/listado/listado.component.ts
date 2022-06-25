import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../Servicios/paises.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  // Variables
  paisesArr = [];
  paisnombre=[]
  paisNombreCompleto=[];
  paisPorCodigo=[];
  paisesPorListaDeCodigos=[];
  paisesMoneda=[];
  paisesLenguaje=[];
  paisCiudadCapital=[];
  paisesRegion=[];
  paisesSubRegion=[];

    // numero de pagina
    numeroPagina = 1;

    // tamaño de pagina
    tamaPagina = 5;
  
    // controlador de indice
    indexController = this.numeroPagina * this.tamaPagina;


  constructor(private _paisesService: PaisesService) {}

  ngOnInit(): void {
    this.obtenerTodos();
    this.obtenerPorNombre();
    this.obtenerPorNombreCompleto();
    this.obtenerPorCodigo();
    this.obtenerPorListaDeCodigos();
    this.obtenerPorMoneda();
    this.obtenerLenguaje();
this.obtenerCiudadCapital();
this.obtenerRegion();
this.obtenerSubRegion();
  }

  obtenerTodos() {
    this._paisesService.obtenerTodos().subscribe((_respuesta: any) => {
      this.paisesArr = _respuesta;
    });
    
  }

  obtenerPorNombre(){
    this._paisesService.obtenerPorNombre("spa").subscribe((_respuesta: any) => {
      this.paisnombre = _respuesta;
    });
  }
 
  obtenerPorNombreCompleto(){
    this._paisesService.obtenerPorNombreCompleto("Pitcairn Group of Islands").subscribe((_respuesta: any) => {
      this.paisNombreCompleto = _respuesta;
    });
  }

  obtenerPorCodigo(){
    this._paisesService.obtenerPorCodigo("per").subscribe((_respuesta: any) => {
      this.paisPorCodigo = _respuesta;
    });
  }

  obtenerPorListaDeCodigos(){
    this._paisesService.obtenerListaDeCodigos("col,pe,at").subscribe((_respuesta: any) => {
      this.paisesPorListaDeCodigos = _respuesta;
    });
  }

  obtenerPorMoneda(){
    this._paisesService.obtenerMoneda("cad").subscribe((_respuesta: any) => {
      this.paisesMoneda = _respuesta;
    });
  }

  obtenerLenguaje(){
    this._paisesService.obtenerLenguaje("german").subscribe((_respuesta: any) => {
      this.paisesLenguaje = _respuesta;
    });
  }

  obtenerCiudadCapital(){
    this._paisesService.obtenerCiudadCapital("lima").subscribe((_respuesta: any) => {
      this.paisCiudadCapital = _respuesta;
    });
  }

  obtenerRegion(){
    this._paisesService.obtenerRegion("europe").subscribe((_respuesta: any) => {
      this.paisesRegion = _respuesta;
    });
  }

  obtenerSubRegion(){
    this._paisesService.obtenerSubRegion("south").subscribe((_respuesta: any) => {
      this.paisesSubRegion = _respuesta;
    });
  }
}
