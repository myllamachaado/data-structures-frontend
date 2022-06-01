import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from './data-structures/data';
import { Res } from './data-structures/res';
import { DataStructuresService } from './services/data-structures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})

export class AppComponent {

  public data : Data;
  public result : Res;

  constructor(private dataStructuresService : DataStructuresService ) { }

  public enviaDadosEntrada(data : Data, form : NgForm) : void { 
    this.dataStructuresService.enviaDadosEntrada(data).subscribe(
      (response : Res) => {
        this.result = response;
        this.result.vetor = this.result.vetor?.toString().replace(/,/g, ", ");
        this.result.vetorOrdenado = this.result.vetorOrdenado?.toString().replace(/,/g, ", ");
        //console.log(response); 
      },
      (error: HttpErrorResponse) => {
        alert("Verifique a entrada de dados. Os a quantidade de números e o algoritmo são obrigatórios!");
        form.reset();
      }
    )
  }

  public limpaDados() : void {
    this.result.vetor = "";
    this.result.vetorOrdenado = "";
  }

}
