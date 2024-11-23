import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente09',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente09.component.html',
  styleUrls: ['./componente09.component.css'], // Must be an array
})
export class Componente09Component {
  nome: string = '';
  cidade: string = '';
}
