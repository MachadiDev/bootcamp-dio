import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Gabriel Machadi';
  imageUrl = "https://picsum.photos/300/300";
  buttonText = "Clique Aqui!"
  textRed = 'text-red';
  bgColor = "red";
  ftSize = "25px";
  width = 200;
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  clicou() {

    alert('Voce clicou ein!');
    
  }

  clicouNoFilho(text: any) {
    alert(text);
  }

}
