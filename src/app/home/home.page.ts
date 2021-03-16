import { TipoDespesa } from './../model/tipodespesa';
import { Despesa } from './../model/despesa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  despesa: Despesa;
  tipos: any[];

  constructor() {
    let data = new Date();
    this.despesa = new Despesa('', undefined, TipoDespesa.OUTRA, data.toISOString());
    this.tipos = Object.values(TipoDespesa);
  }

  adicionar() {
    const novaDespesa = new Despesa(
      this.despesa.motivo,
      this.despesa.valor,
      this.despesa.tipo,
      this.despesa.data);
    console.log(novaDespesa);
  }
}
