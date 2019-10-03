import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(){
  this.grabarLocalStorage();
}

grabarLocalStorage(){
  let nombre :string= "matias";
  localStorage.setItem("nombre", nombre);
  
}



  title = 'proyecRoyale';
}
