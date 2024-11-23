import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pessoa } from '../modelo/pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css',
})
export class Componente11Component {
  //configurar o typescript para aceitar variavel sem inicialização
  nome: string;

  //objeo de formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
    ]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  //Visibilidade dos botoes
  btnCadastrar: boolean = true;

  //vetor
  vetor: Pessoa[] = [];
  //armazenar indice da pessoa seleconada
  indice: number = -1;
  //função de cadastro
  cadastrar() {
    //cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);
    //limpesa dos inputs
    this.formulario.reset;
    //visualização via console
    // console.table(this.vetor);

    //visibilidade dos botoes
    this.btnCadastrar = true;
  }

  //função seleção
  selecionar(indice: number) {
    //atribuir o indice da pessoa
    this.indice = indice;
    //atribuir os dados da pessoa no fomulario
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade,
    });

    //visiilidade dos botoes
    this.btnCadastrar = false;
  }
  //funcao alteraçao
  alterar() {
    this.vetor[this.indice] = this.formulario.value as Pessoa;
    //limpar os imputs
    this.formulario.reset();

    //visbilidade dos otoes
    this.btnCadastrar = true;
  }

  //fnçao remover
  remover() {
    this.vetor.splice(this.indice, 1);

    //limpar os imputs
    this.formulario.reset();

    //visbilidade dos otoes
    this.btnCadastrar = true;
  }

  //funçao cancelar
  cancelar() {
    //limpar os imputs
    this.formulario.reset();

    //visbilidade dos otoes
    this.btnCadastrar = true;
  }
}
