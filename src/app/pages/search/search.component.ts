import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe(
      params=>{
        this.productosService.buscarProducto(params['termino']);
        console.log(params['termino'], 'sasasasasa')
      });

  }

}
