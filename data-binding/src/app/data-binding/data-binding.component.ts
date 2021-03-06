import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url: string = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual:string  = '';
  valorSalvo:string = '';

  nome:string = 'abc';
  pessoa:any = {
    nome: 'def',
    idade: 20
  }

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('botao clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement> evento.target).value; 
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

}
