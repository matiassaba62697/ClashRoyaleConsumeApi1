import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ClashRoyaleService } from '../../services/clash-royale.service'
import { Observable, from } from 'rxjs';
import {Clans} from '../../models/clans/clans'
import { ClanMembers } from 'src/app/models/clans/clan-members';
import { Badge } from 'src/app/models/clans/badge';
import { Player } from 'src/app/models/player/player';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {




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

@Input() informacion:string;
pureba:string="hola";


  ngOnInit() {
    console.log(this.informacion)
  }





  
  constructor(private   clashService: ClashRoyaleService){
    this.cargarClans()
this.bestPlayer();
// this.cargarPlayers("#2J08RPLQ8")
    console.log("data")
  }


  cargarMejor(elemento:Player){
  localStorage.setItem("mejor", JSON.stringify(elemento) );   
}



  iconClan(clanIcon:Clans){
    this.clashService.getIconClans(clanIcon.tag)
    .subscribe(response => {



      console.log(clanIcon)
      clanIcon.iconoUrl=response.badge.image
    }
      , error => console.log( alert("error en la peticion de iconos"))
    );
  }
  
  bestPlayer(){
    
     var besplayers=new Array<Player>();

    this.clashService.getBestPlayes()
    .subscribe(response => {
      besplayers= response;
      this.mejorJugador=besplayers[0];

    }
      , error => console.log( alert("error en la peticion de mejores jugadores"))
    );
  }
  
  
  



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
  
  
  
  
validaBoton(filtro:String){
if(filtro.length >0){
  this.segFilter=this.filterPost;


this.cargas= 1;
}else{
  this.clanes = new Array<Clans>();
  this.cargas=0;
}
}

  cargarClans(){
    const resultadoPost= [];

    this.clashService.getClans()
    .subscribe(response => {
      //es necesario que convierta el JSON que
          response.items.forEach(element => {
            this.urlsIcon='';
            var clanTemp = new Clans();
            Object.assign(clanTemp, element);

            resultadoPost.push(clanTemp);
            this.iconClan(clanTemp);

            clanTemp.iconoUrl=this.urlsIcon;
            this.clanes = resultadoPost;

          });

        }
          , error => console.log(error)
        );
        console.log(this.clanes)
    };    



  
  getClanTag() {
    this.clashService.getTag("#P8G2JQ0R")
      .subscribe((response: any) => {
        this.clan = new Clans();
        this.clan = response;

      }
        , error => console.log( alert("error en la peticion"))
      );
  }


}
