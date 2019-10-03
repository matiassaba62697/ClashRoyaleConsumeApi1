import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player/player';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

jugador:Player  
  constructor() { 
    let mejor= JSON.parse(localStorage.getItem("mejor")) ;
    this.jugador= mejor;
  }

  cargarMejor(){
    
    console.log(this.jugador)
    console.log(this.jugador.cards[0].iconUrls.medium)

  }

  ngOnInit() {
  }

}
