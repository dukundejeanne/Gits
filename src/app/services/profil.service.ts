import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private username:string;
  private clientid:'d57851978823c89e369c';
  private clientsecret:'4e6d1f0affb77e961c396b4825df252a7e8dd2a3';

  constructor(private http:HttpClient) {
    console.log("the service is ready");
    this.username='dukundejeanne';
   }
   getProfilInfo(){
     return this.http.get("https://api.github.com/users/"+this.username + "?client_id="+ 
     this.clientid+ "&client_secret="+this.clientsecret);
    // .map((res: { json: () => void; })=>res.json());
   }
}
