import { Injectable } from '@angular/core';
import {DeclarationTVA} from '../model/declaration-tva.model';
import {HttpClient} from '@angular/common/http';
import {FactureCharge} from '../model/facture-charge.model';
import {FactureGain} from '../model/facture-gain.model';
import {Observable} from 'rxjs';
import {DeclarationIR} from '../model/declaration-ir.model';

@Injectable({
  providedIn: 'root'
})
export class DeclarationTVAService {
private _declarationTVA: DeclarationTVA;
private errorS: number;
private errorU: number;
  get declarationTVA(): DeclarationTVA {
  if (this._declarationTVA == null) {
    this._declarationTVA = new DeclarationTVA();
  }
    return this._declarationTVA;
  }

  set declarationTVA(value: DeclarationTVA) {
    this._declarationTVA = value;
  }

  private _url = 'http://localhost:8090/impot/declarationTVA/';
  constructor(private http: HttpClient) { }
  public save() {
    this.http.post<number>(this._url, this.declarationTVA).subscribe(
      data => {
        console.log(data);
        this.errorS = data ;
      }, error => {
        console.log('ahia');
      }
    );
  }
  public addFactureCharges(factureCharge: FactureCharge) {
    if (typeof(factureCharge.numeroFacture) === 'number') {
    this.declarationTVA.factureCharges.push(this.pushToListCharges(factureCharge));
    }
  }
  public  addFactureGains(factureGain: FactureGain) {
    if (typeof(factureGain.numeroFacture) === 'number') {
      this.declarationTVA.factureGains.push(this.pushToListGains(factureGain));
    }
  }
  public pushToListCharges(factureCharge: FactureCharge) {
    const clone = new FactureCharge();
    clone.numeroFacture = factureCharge.numeroFacture;
    return clone;
  }

  public pushToListGains(factureGain: FactureGain) {
    const clone = new FactureGain();
    clone.numeroFacture = factureGain.numeroFacture;
    return clone;
  }
  public showError() {
    if (this.errorS === -1 || this.errorU === -2) { return 'Societe introuvable'; }
    if (this.errorS === -2) { return 'DeclarationTva est deja existant '; }
    if (this.errorS === -3 || this.errorU === -3) { return 'l un des factures de gains n exit pas'; }
    if (this.errorS === -4 || this.errorU === -4) { return 'l un des factures de charges n exit pas'; }
    if (this.errorU === -1) { return  'DeclarationTva introuvable ' ; }
  }
  public update() {
    if (this.declarationTVA.societeRef === '') {
      this.declarationTVA.societeRef = null ;
    }
    if ((typeof (this.declarationTVA.annee ) === 'number' || this.declarationTVA.annee == null )
      && (typeof (this.declarationTVA.totalTva) === 'number' || this.declarationTVA.totalTva == null)
    && this.declarationTVA.ref !== null) {
      this.http.post<number>(this._url + 'update/', this.declarationTVA).subscribe(
        data => {
          console.log(data);
          window.location.href = 'http://localhost:4200/DeclarationTVA' ;
          this.errorU = data;
        }, error => {
          console.log('error');
        }
      );
    }
  }
  public deleteByRef (ref: string) {
    this.http.delete<number>(this._url + 'delete/' + ref).subscribe(
      data => {
        console.log( data);
        window.location.href = 'http://localhost:4200/DeclarationTVA' ;
      }, error => {
        console.log('error');
      }
    );
  }
  public findAll(): Observable<DeclarationTVA[]> {
    return this.http.get<DeclarationTVA[]>(this._url);
  }
}
