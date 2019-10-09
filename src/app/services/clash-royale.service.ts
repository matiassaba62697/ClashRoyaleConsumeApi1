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
 private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVjYWIxYzFiLWM2YTYtNDc4Ny04ZmY4LWJhNGQzOWYxMjQ2OSIsImlhdCI6MTU3MDIwMDYzMiwic3ViIjoiZGV2ZWxvcGVyLzFiOTZiYzNjLTRhZWUtODdlNC0zMjBkLWE0NTVmMTgxNDRiZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.BHjGQYPp6HO7_I4ncsWJItsI2TQFJfhSmzUSRLttTTh9jD-UG33JeOzoZFEfd44BObFFAuQXzON-O9elCtFBSA";
  
  


  


 private iconUrl : string= "https://api-v2.royaleapi.com/clan";
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
    
    

    private Player: string="https://api.royaleapi.com/player/";
    public getPlayerTag(tagPlayer:string):Observable<any>{
      const httpOptions={
        headers:new HttpHeaders({
          "Authorization": this.iconAuthorization
        })
      };
      tagPlayer = tagPlayer.replace("#", "%23");
          return this._http.get(this.Player+tagPlayer , httpOptions);
      }
      


      
      public getMembers(clanTag: string): Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({
            "Authorization": this.authorization
          })
        };
      
        var consultUrl: string= "";

      
        clanTag = clanTag.replace("#", "%23");
        ///console.log(this.baseUrl + "/" + clanTag + "/members" + consultUrl);
      
        return this._http.get(this.baseUrl + "/" + clanTag + "/members" + consultUrl, httpOptions);
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







war:string="https://api-v3.royaleapi.com/clan"

public getWarlog(clanTag: string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      "Authorization": this.iconAuthorization
    })
  };
  clanTag = clanTag.replace("#", "");
  return this._http.get(this.war + "/" + clanTag +"/warlog", httpOptions);
}














  public getClanTag(clanTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };
    clanTag = clanTag.replace("#", "%23");
    return this._http.get(this.baseUrl + "/" + clanTag , httpOptions);
  }

}
