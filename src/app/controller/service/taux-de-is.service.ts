import { Injectable } from '@angular/core';
import {TauxDeIs} from '../model/taux-de-is.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TauxDeIR} from '../model/taux-de-ir.model';

@Injectable({
  providedIn: 'root'
})
export class TauxDeIsService {
  private _taux_de_is: TauxDeIs;
  private errorS: number;
  private errorU: number;
  private _url = 'http://localhost:8090/impot/TauxDeIS/';

  get taux_de_is(): TauxDeIs {
    if (this._taux_de_is == null) {
      this._taux_de_is = new TauxDeIs();
    }
    return this._taux_de_is;
  }

  set taux_de_is(value: TauxDeIs) {
    this._taux_de_is = value;
  }

  public save() {
    if (typeof (this.taux_de_is.montantMax) === 'number' && typeof (this.taux_de_is.tauxMax) === 'number'
      && typeof (this.taux_de_is.montantMax) === 'number' && typeof (this.taux_de_is.tauxMoy) === 'number' && typeof (this.taux_de_is.tauxMin) === 'number'
      && (this.taux_de_is.ref !== null && this.taux_de_is.ref !== '') && (this.taux_de_is.dateDebut !== null || this.taux_de_is.dateFin !== null)
    ) {
      this.http.post<number>(this._url, this.taux_de_is).subscribe(
        data => {
          console.log(data);
          if (data > 0) {
            window.location.href = 'http://localhost:4200/TauxDeIs';
          }
          this.errorS = data;
        }, error => {
          console.log('error save');
        }
      );
    }
  }

  public errorMsg() {
    if (this.errorS === -1) { return 'Taux de is est deja existant '; }
    if (this.errorS === -2) { return 'probleme au niveau du Taux max ou min ou moyenne'; }
    if (this.errorS === -3) { return 'probeleme au niveau de la date '; }
    if (this.errorU === -1) { return 'Taux de is est introuvabke '; }
    if (this.errorU === -2) { return 'probleme au niveau du montant max ou min  '; }
    if (this.errorU === -3) { return 'probeleme au niveau de la date'; }
    if (this.errorU === -4 || this.errorU === -5) { return 'probeleme au niveau de taux min,max ou moyen'; }
  }

  public update() {
    if (this.taux_de_is.montantMax === null ) {
      this.taux_de_is.montantMax = 0 ;
    }
    if (this.taux_de_is.montantMin === null ) {
      this.taux_de_is.montantMin = 0 ;
    }
    if (this.taux_de_is.tauxMax === null ) {
      this.taux_de_is.tauxMax = 0 ;
    }
    if (this.taux_de_is.tauxMoy === null ) {
      this.taux_de_is.tauxMoy = 0 ;
    }
    if (this.taux_de_is.tauxMin === null ) {
      this.taux_de_is.tauxMin = 0 ;
    }

    if (typeof (this.taux_de_is.montantMax) === 'number' && typeof (this.taux_de_is.tauxMax) === 'number'
      && typeof (this.taux_de_is.montantMax) === 'number' && typeof (this.taux_de_is.tauxMoy) === 'number' && typeof (this.taux_de_is.tauxMin) === 'number') {
      this.http.put<number>(this._url + 'update', this.taux_de_is).subscribe(
        data => {
          console.log(data);
          if (data > 0) {
            window.location.href = 'http://localhost:4200/TauxDeIs';
          }
          this.errorU = data;
        }, error => {
          console.log('error');
        }
      );
    }
  }

  constructor(private http: HttpClient) { }

  public deleteByRef(ref: string) {
    this.http.delete<number>(this._url + 'delete/' + ref).subscribe(
      data => {
        console.log(data);
        window.location.href = 'http://localhost:4200/TauxDeIs' ;
      }, error => {
        console.log('error');
      }
    );
  }

  public findAll(): Observable<TauxDeIs[]> {
    return this.http.get<TauxDeIs[]>(this._url);
  }







}
