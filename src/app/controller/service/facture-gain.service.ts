import { Injectable } from '@angular/core';
import {FactureGain} from '../model/facture-gain.model';

@Injectable({
  providedIn: 'root'
})
export class FactureGainService {
  private _factureGain: FactureGain
  constructor() { }

  get factureGain(): FactureGain {
 if (this._factureGain == null ) {
   this._factureGain = new FactureGain();
 }
    return this._factureGain;
  }

  set factureGain(value: FactureGain) {
    this._factureGain = value;
  }
}
