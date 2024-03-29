import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { ActivatedRoute} from '@angular/router';
import { ClashRoyaleService } from '../../services/clash-royale.service'

import {Clans} from '../../models/clans/clans'







@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  clan: Clans;







  constructor(private route: ActivatedRoute,private   clashService: ClashRoyaleService) { 
    

  }


  ngOnInit() {
    this.route.params.subscribe( params => {

     this.getPlayer1Tag(params.tag);
     this.getPlayer2Tag(params.tag);
     //getClanTag(params.tag)
    });    
    
  }

  jugador1:Player  
  jugador2:Player  
  getPlayer1Tag(inicioClan:string) {

    this.clashService.getPlayers(inicioClan)
      .subscribe((response: any) => {
        this.clan = new Clans();
        this.clan = response;
        console.log("jugador1")
        console.log(response)

      }
        , error => console.log( alert("error en la peticion getplayer1tag"))

      );
  }


getClanPlayer(tagClan:string){
this.clashService.getClanTag(tagClan)
.subscribe( (responseclan: any)=>{
  console.log(responseclan)
}

)
}





currentDeck:Array<any>;
carts:Array<any>
  getPlayer2Tag(inicioPlayer:string) {
    this.clashService.getPlayerTag(inicioPlayer)
      .subscribe((response: any) => {
        console.log("jugador2")
        console.log(response) ;
        this.clan = new Clans();
        this.clan = response;
this.jugador2=response;
this.currentDeck= new Array<any>();
this.carts= new Array<any>();
this.currentDeck.push(response.currentDeck);
this.currentDeck=this.currentDeck[0]
  this.carts.push(response.cards);
  this.carts=this.carts[0];

      }
        , error => console.log( alert("error en la peticion getplayer2tag"))
      );
  }



urlCarta:string;




}
