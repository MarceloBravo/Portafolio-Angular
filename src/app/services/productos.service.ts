import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url: string = "https://angular-html-51baf.firebaseio.com/productos_idx.json";
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {     
    this.cargarProductos();
    this.cargando = false;
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject) =>{

      this.http.get(this.url).subscribe(
        (resp: Producto[])=>{
          this.productos = resp;
        });
        resolve();
    } );
    /*
    this.http.get(this.url).subscribe(
      (resp: Producto[])=>{
        this.productos = resp;
        //console.log(this.productos);
        this.cargando = false;
      }
    );
    */
  }


  public getProducto(idProducto: string){
  return this.http.get(`https://angular-html-51baf.firebaseio.com/productos/${ idProducto }.json`);
  }

  buscarProducto(id: string){
    if(this.productos.length == 0){
      this.cargarProductos().then( () => {
        //Se ejecutará despúesde tener los productos
        //aplica el filtro
        this.filtartProductos(id);
      })
    }else{
      //aplica el filtro
      this.filtartProductos(id);
      
    }
    console.log(this.productosFiltrados);
  }

  private filtartProductos(termino: string){
    //this.productosFiltrados = this.productos.filter(producto => { 
    //  return true;
    //});
    termino = termino.toLowerCase();
    this.productosFiltrados = [];
    this.productos.forEach( prod => {
      if(prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0){
        this.productosFiltrados.push(prod);
      }
    });
  }
}
