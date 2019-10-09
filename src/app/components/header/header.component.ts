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
    this.jugadores();
  }
redirec:string=""
placeholder:string="Tag de Jugadores";
busqueda:string='';

mostrar(){
  if(this.busqueda.length>6){


if(  this.etiqueta=="clanes"){
  this.clanes();
}if(  this.etiqueta=="jugadores"){
  this.jugadores()
}
}else{
  this.redirec="#"
  console.log(this.busqueda)
}}


jugadores(){

  this.placeholder="Tag de Jugadores"
  this.redirec="jugador/%23"+this.busqueda;
  this.etiqueta="jugadores"
}
clanes(){
console.log(this.busqueda)
  this.placeholder="Tag de Clanes"
  this.redirec="clan/%23"+this.busqueda;
  this.etiqueta="clanes"
}






  ngOnInit() {
  }

}
