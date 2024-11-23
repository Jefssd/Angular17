import { Component } from '@angular/core';

@Component({
  selector: 'app-component01',
  standalone: true,
  imports: [],
  templateUrl: './component01.component.html',
  styleUrl: './component01.component.css',
})
export class Component01Component {
  // varaveis
  nome: string = 'jeferson';
  idade: number = 24;
  soma: number = 8 + 3;
}
