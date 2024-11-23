import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css',
})
export class Componente08Component {
  //variavel media
  media: number = 4;
  //vetor
  nomes: string[] = ['jef', 'alice', 'lilice', 'jeferson'];
  //linguagem
  linguagem: string = 'CSS';
}
