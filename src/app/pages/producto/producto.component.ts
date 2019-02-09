import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  producto: ProductoDescripcion;
  productoId: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe(parametros => {
      //console.log(parametros['id']);
      this.productoService.getProducto(parametros['id']).subscribe( (producto: ProductoDescripcion) =>{
          this.producto = producto;
          this.productoId = parametros['id'];
          //console.log(producto);
          
      });
    });

  }

}
