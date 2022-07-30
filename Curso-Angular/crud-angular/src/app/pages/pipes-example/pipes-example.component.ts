import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'Olá Mundo!';
  date = new Date;
  pessoa = {
    nome: 'Gabriel',
    idade: 23,
    profissao: 'Piloto RPA'
  };
  nomes = ["GabiGabi"];


  constructor() { }

  ngOnInit(): void {
  }

  add(text: string) {
    this.nomes.push(text);
  }

}
