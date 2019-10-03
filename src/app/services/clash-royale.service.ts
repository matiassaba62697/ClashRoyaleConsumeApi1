import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';

//import {r} from 'requests';

@Injectable({
  providedIn: 'root'
})
export class ClashRoyaleService {
  private baseUrl : string= "https://api.clashroyale.com/v1/clans";
  //private baseClans: string="https://api.clashroyale.com/v1/clans?minMembers=2";

  private baseClans: string="https://api.clashroyale.com/v1/clans?minMembers=49&maxMembers=50&minScore=70000";
  private basePlayers: string="https://api.clashroyale.com/v1/players";
  




  public getPlayers(PlayerTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };

  
    PlayerTag = PlayerTag.replace("#", "%23");
    ///console.log(this.baseUrl + "/" + clanTag + "/members" + consultUrl);
  
    return this._http.get(this.basePlayers + "/" + PlayerTag , httpOptions);
  }
  
  
  //casa
  //private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVkZWM0MmZkLTM4MzktNGU1OS04ZjU3LWU4NDEwNWIyZDYxYiIsImlhdCI6MTU2OTc2OTE0Nywic3ViIjoiZGV2ZWxvcGVyLzFiOTZiYzNjLTRhZWUtODdlNC0zMjBkLWE0NTVmMTgxNDRiZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODEuMS40LjE3OCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.u54STEzCEq_0AhiECdsUuPP-3NxHWq27vsAVyrre4QtHr9p1n3yLH-83Wum9A_3ivxdKylE6Gwj-7q-yexezTg";
  
//openix
  private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY0YWJlMTJlLTVlZjktNDY2ZC04MDA2LWVlNmQxYjc3ZTRjMiIsImlhdCI6MTU2OTg0ODI1Mywic3ViIjoiZGV2ZWxvcGVyLzFiOTZiYzNjLTRhZWUtODdlNC0zMjBkLWE0NTVmMTgxNDRiZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.jqawEokdhKHYcS39KA7Jxb2k9eCNpVh2oTRJ9yw6wtUFz-G6Q2gb98SGErdw4SjszC-ZCou9INUE9JghllQemQ";
  
  


  


 private iconUrl : string= "https://api.royaleapi.com/clan";
  private iconAuthorization: string="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEwMywiaWRlbiI6IjYyODIxNzg0MjYxNzE1NTU4NCIsIm1kIjp7InVzZXJuYW1lIjoiIiwiZGlzY3JpbWluYXRvciI6IiIsImtleVZlcnNpb24iOjB9LCJ0cyI6MTU2OTg0OTYxODQ0NX0.6nCR5QBR0K1CvWd276YxXZWbSONwXCkWVVAfTG97U5E";
  public getIconClans(clanIconTag:string):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({
        "Authorization": this.iconAuthorization
      })
    };
    clanIconTag = clanIconTag.replace("#", "%23");
        return this._http.get(this.iconUrl+"/"+clanIconTag , httpOptions);
    }
    
    

    private bestPlayes: string="https://api-v2.royaleapi.com/top/players";
    public getBestPlayes():Observable<any>{
      const httpOptions={
        headers:new HttpHeaders({
          "Authorization": this.iconAuthorization
        })
      };
          return this._http.get(this.bestPlayes , httpOptions);
      }
      

  
  
  constructor(private _http: HttpClient) { }

;

public getClans():Observable<any>{
const httpOptions={
  headers:new HttpHeaders({
    "Authorization": this.authorization
  })
};
    return this._http.get(this.baseClans , httpOptions);
}




public getMembers(clanTag: string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      "Authorization": this.authorization
    })
  };

  var consultUrl: string= "";
  var moreOneParameter : boolean= false;

  clanTag = clanTag.replace("#", "%23");
  ///console.log(this.baseUrl + "/" + clanTag + "/members" + consultUrl);

  return this._http.get(this.baseUrl + "/" + clanTag + "/members" + consultUrl, httpOptions);
}













  public getTag(clanTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };
    clanTag = clanTag.replace("#", "%23");
    return this._http.get(this.baseUrl + "/" + clanTag , httpOptions);
  }

}
