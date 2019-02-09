import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
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
  constructor( public infoPagina: InfoPaginaService, private router: Router) { }  //Router nos permitira navegar hacia otra página (la url debe haber sido registradad en app-routing.module.ts)

  ngOnInit() {
  }

  buscarProducto(termino: string){
    if(termino.length > 0){
      this.router.navigate(['/search',termino]);
    }
    //console.log(termino);
  }

}
