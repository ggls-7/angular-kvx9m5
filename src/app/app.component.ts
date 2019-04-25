import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  campoTexto;
  listaTexto=[];
 addTexto()  {
  this.listaTexto.push(this.campoTexto);
}
removeTexto(texto){
  var num=this.listaTexto.indexOf(texto);
  this.listaTexto.splice(num,1)
}
}


