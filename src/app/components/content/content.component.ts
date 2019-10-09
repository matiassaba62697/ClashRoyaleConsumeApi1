import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { ActivatedRoute } from '@angular/router';
import { ClashRoyaleService } from '../../services/clash-royale.service'

import {Clans} from '../../models/clans/clans'
import { ClanMembers } from 'src/app/models/clans/clan-members';






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
this.jugador1=response;
      }
        , error => console.log( alert("error en la peticion"))
      );
  }


getClanPlayer(tagClan:string){
this.clashService.getClanTag(tagClan)
.subscribe( (responseclan: any)=>{
  console.log(responseclan)
}

)
}






carts:Array<any>
  getPlayer2Tag(inicioPlayer:string) {
    this.clashService.getPlayerTag(inicioPlayer)
      .subscribe((response: any) => {
        console.log("jugador2")
        console.log(response) ;
        this.clan = new Clans();
        this.clan = response;
this.jugador2=response;
this.carts= new Array<any>();
  this.carts.push(response.cards);
  this.carts=this.carts[0];

      }
        , error => console.log( alert("error en la peticion"))
      );
  }



urlCarta:string;




}
