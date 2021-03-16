import { TipoDespesa } from './tipodespesa';
export class Despesa {
    motivo: string;
    valor: number;
    tipo: TipoDespesa;
    data: string; //ISOString para data

    constructor(id: string, val: number, tp: TipoDespesa, data: string) {
        this.motivo = id;
        this.valor = val;
        this.tipo = tp;
        this.data = data;
    }
}