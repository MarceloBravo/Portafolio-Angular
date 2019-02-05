import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url: string = "https://angular-html-51baf.firebaseio.com/productos_idx.json";
  productos: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {     
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get(this.url).subscribe(
      (resp: Producto[])=>{
        this.productos = resp;
        console.log(this.productos);
        this.cargando = false;
      }
    );
  }
}
