import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //Para utilizar la siguiente linea antes se be haber creado :
  //el archivo json assets/data/data-pagina.json, 
  //la interface info-pagina.interface.ts y
  //el servicio info-pagina.service.ts 
  constructor( public infoPagina: InfoPaginaService) { }

  ngOnInit() {
  }

  anio: number = new Date().getUTCFullYear();

}
