import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //Permite ejecutar peticiones a servideores REST 
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  //info: any = {}; //El onjeto any puede alojar cualquier cosa
  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 

    console.log('Servicio de infoPágina creado');

      //Leer archivo JSON
      this.http.get('assets/data/data-pagina.json').subscribe(resp=>{console.log(resp['twitter']);})
      this.http.get('assets/data/data-pagina.json').subscribe(resp=>{console.log(resp['nombre_corto']);})

      this.http.get('assets/data/data-pagina.json').subscribe(        
        (resp :InfoPagina)=>{
          this.cargada = true;
          this.info = resp;
          console.log(resp);
        }
        )

  }
}
