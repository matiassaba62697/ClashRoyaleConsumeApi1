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






jugador:Player  
  constructor(private route: ActivatedRoute,private   clashService: ClashRoyaleService) { 
    let mejor= JSON.parse(localStorage.getItem("mejor")) ;
    this.jugador= mejor;
  }

  cargarMejor(){
    
    console.log(this.jugador)
    console.log(this.jugador.cards[0].iconUrls.medium)

  }
  ngOnInit() {
    this.route.params.subscribe( params => {
     console.log(params.tag)
     this.getClanTag(params.tag);
     this.getPlayerTag(params.tag);
     //getClanTag(params.tag)
    });    
    
  }

  getClanTag(inicioClan:string) {
    this.clashService.getPlayers(inicioClan)
      .subscribe((response: any) => {
        this.clan = new Clans();
        this.clan = response;
        console.log(this.clan)

      }
        , error => console.log( alert("error en la peticion"))
      );
  }


  getPlayerTag(inicioClan:string) {
    this.clashService.getPlayer(inicioClan)
      .subscribe((response: any) => {
        this.clan = new Clans();
        this.clan = response;
        console.log(this.clan)

      }
        , error => console.log( alert("error en la peticion"))
      );
  }





}
