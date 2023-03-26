import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})

export class DataBindingComponent {

  public contatodorClique : number = 0;
  public urlImagem: string ="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  public nome: string ="";

  public nomeTwoWay: string ="";

  public NomeElegante: string ="";
  adicionarClique(){

    this.contatodorClique++;
  }

  zerarContador(){
    this.contatodorClique = 0;
  }

  keyup(event: any){
    this.nome= event.target.value;//target = é a forma de input no caso a caixa de texto e value é o valor
  }
}
