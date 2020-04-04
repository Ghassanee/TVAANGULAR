import { Injectable } from '@angular/core';
import {FactureCharge} from '../model/facture-charge.model';
import {Societe} from '../model/societe.model';
import {HttpClient} from '@angular/common/http';
// import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class FactureChargeService {
  private _factureCharge: FactureCharge;
  private _url = 'http://localhost:8090/impot/FactureCharge/numeroFacture/';
  constructor(private http: HttpClient) { }


  get factureCharge(): FactureCharge  {
if (this._factureCharge == null) {
  this._factureCharge = new FactureCharge();
}
    return this._factureCharge;
  }

  set factureChargeService(value: FactureCharge) {
    this._factureCharge = value;
  }

  public findByNumeroFacture(ref: number) {
    this.http.get<FactureCharge>(this._url + ref).subscribe(
      data => {
        console.log(+ data);
      return data;
      },
      Error => {
        return null;
      }
    );

  }
}
