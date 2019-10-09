import { Component, OnInit } from '@angular/core';



//midelware
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  etiqueta:string;
 //print(json.dumps(r.json(), indent = 2))
  constructor() { 
    this.etiqueta="jugadores";
  }
redirec:string="jugador/%23P9GGPQJUP"
placeholder:string="Tag de Jugadores";
busqueda:string;



cartas(){

  this.placeholder="Nombre de Carta"
  this.redirec="card/"+this.busqueda;
  this.etiqueta="cartas";
}
jugadores(){

  this.placeholder="Tag de Jugadores"
  this.redirec="jugador/%23"+this.busqueda;
  this.etiqueta="jugadores"
}
clanes(){

  this.placeholder="Tag de Clanes"
  this.redirec="clan/%23"+this.busqueda;
  this.etiqueta="clanes"
}






  ngOnInit() {
  }

}
