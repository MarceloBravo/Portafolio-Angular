import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
//import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Para utilizar la siguiente linea antes se be haber creado :
  //el archivo json assets/data/data-pagina.json, 
  //la interface info-pagina.interface.ts y
  //el servicio info-pagina.service.ts  
  constructor( public infoPagina: InfoPaginaService) { }

  ngOnInit() {
  }

}
