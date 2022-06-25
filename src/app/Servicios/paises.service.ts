import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  url = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) {}

  obtenerTodos() {
    return this.http.get(`${this.url}all`);
  }

  obtenerPorNombre(nombre: String) {
    return this.http.get(`${this.url}name/` + nombre);
  }

  obtenerPorNombreCompleto(nombre: String) {
    return this.http.get(`${this.url}name/` + nombre + '?fullText=true');
  }

  obtenerPorCodigo(codigo: String) {
    return this.http.get(`${this.url}alpha/` + codigo);
  }

  obtenerListaDeCodigos(codigos: String) {
    return this.http.get(`${this.url}alpha?codes=` + codigos);
  }

  obtenerMoneda(moneda: String) {
    return this.http.get(`${this.url}currency/` + moneda);
  }

  obtenerLenguaje(lenguaje: String) {
    return this.http.get(`${this.url}lang/` + lenguaje);
  }

  obtenerCiudadCapital(capital: String) {
    return this.http.get(`${this.url}capital/` + capital);
  }

  obtenerRegion(region: String) {
    return this.http.get(`${this.url}region/` + region);
  }

  obtenerSubRegion(subregion: String) {
    return this.http.get(`${this.url}subregion/` + subregion);
  }
}
