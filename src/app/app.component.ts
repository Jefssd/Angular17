import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { Componente02Component } from './componente02/componente02.component';
import { Componente03Component } from './componente03/componente03.component';
import { Componente04Component } from './componente04/componente04.component';
import { Componente11Component } from './componente11/componente11.component';
import { Componente05Component } from './componente05/componente05.component';
import { Componente06Component } from './componente06/componente06.component';
import { Componente07Component } from './componente07/componente07.component';
import { Componente08Component } from './componente08/componente08.component';
import { Componente09Component } from './componente09/componente09.component';
import { Componente10Component } from "./componente10/componente10.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Component01Component,
    Componente02Component,
    Componente03Component,
    Componente04Component,
    Componente11Component,
    Componente05Component,
    Componente06Component,
    Componente07Component,
    Componente08Component,
    Componente09Component,
    Componente10Component
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular17';
}
