import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import {Clans} from '../../models/clans/clans'
import { ActivatedRoute } from '@angular/router';
import { ClashRoyaleService } from '../../services/clash-royale.service'
import { ClanMembers } from 'src/app/models/clans/clan-members';





@Component({
  selector: 'app-clans',
  templateUrl: './clans.component.html',
  styleUrls: ['./clans.component.css']
})
export class ClansComponent implements OnInit {

  constructor(private route: ActivatedRoute,private   clashService: ClashRoyaleService) {  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getClanMember(params.tag);
      this.getClanTag(params.tag);
this.getwarLog(params.tag);
      //getClanTag(params.tag)
     });   
  }

  clan: Clans;
  clanes:Array<Clans>;
  member:ClanMembers;
  members:Array<ClanMembers>;
  filterPost ='';
  segFilter='';
  clanTag: '';
  todoClanes=[];
  cargas: number;
  pageActualClans:number=1;
  pageActualMiembros:number=1;
  urlsIcon:String;
  player:Player;
  players:Array<Player>;
  mejorJugador: Player;


getClanMember(clanTags: string) {
  this.members = new Array<ClanMembers>();
  this.clashService.getMembers(clanTags)
    .subscribe(response => {
      response.items.forEach(element => {
        var memTemp= new ClanMembers();
        Object.assign(memTemp, element);
        this.members.push(memTemp);
        this.cargarPlayers(memTemp.tag);
      });
      
    }
      , error => console.log(error)
    );
}
cargarPlayers(playerTag:string){
  this.players=new Array<Player>();
  this.clashService.getPlayers(playerTag)
  .subscribe(response => {
      var playerTemp= new Player();
      Object.assign(playerTemp, response);
      this.players.push(playerTemp);
 ;}
    , error => console.log( alert("error en la peticion"))
  );
}

getClanTag(tag:string) {
  this.clashService.getClanTag(tag)
    .subscribe((response: any) => {
      this.clan = new Clans();
      this.clan = response;
console.log(this.clan);

    }
      , error => console.log( alert("error en la peticion"))
    );
}


warslog:any;
clanesdeguerra:Array<Clans>;
getwarLog(tagClan:string){
this.clashService.getWarlog(tagClan)
.subscribe((response:any)=>
{
  this.warslog=response
}
, error => console.log( alert("error en la peticion de guerra"))
);}

mostrador:number=-1
  cambio(){
this.mostrador++;
    console.log(this.mostrador)
  }








}
