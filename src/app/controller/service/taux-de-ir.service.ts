import { Injectable } from '@angular/core';
import {TauxDeIR} from '../model/taux-de-ir.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TauxDeIRService {
private _tauxDeIR: TauxDeIR;
  constructor(private http: HttpClient) { }
private errorS: number;
private errorU: number;

  get tauxDeIR(): TauxDeIR {
    if (this._tauxDeIR == null) {
      this._tauxDeIR = new TauxDeIR();
    }
    return this._tauxDeIR;
  }

  set tauxDeIR(value: TauxDeIR) {
    this._tauxDeIR = value;
  }

  private _url = 'http://localhost:8090/impot/tauxDeIR/';
  public save() {
    if (typeof (this.tauxDeIR.salaireMax) === 'number' && typeof (this.tauxDeIR.salaireMin) === 'number'
      && typeof (this.tauxDeIR.pourcentage) === 'number'
    && (this.tauxDeIR.ref !== null && this.tauxDeIR.ref !== '')) {
      this.http.post<number>(this._url, this.tauxDeIR).subscribe(
        data => {
          console.log(data);
          if (data > 0) {
            window.location.href = 'http://localhost:4200/tauxDeIR';
          }
          this.errorS = data;
        }, error => {
          console.log('error');
        }
      );
    }
  }
  public update() {
    if (this.tauxDeIR.salaireMin === null ) {
      this.tauxDeIR.salaireMin = 0 ;
    }
    if (this.tauxDeIR.salaireMax === null ) {
      this.tauxDeIR.salaireMax = 0 ;
    }
    if (this.tauxDeIR.pourcentage === null ) {
      this.tauxDeIR.pourcentage = 0 ;
    }
    if (typeof (this.tauxDeIR.salaireMax) === 'number' && typeof (this.tauxDeIR.salaireMin) === 'number'
      && typeof (this.tauxDeIR.pourcentage) === 'number') {
      this.http.post<number>(this._url + 'update', this.tauxDeIR).subscribe(
        data => {
          console.log(data);
          if (data > 0) {
            window.location.href = 'http://localhost:4200/tauxDeIR';
          }
          this.errorU = data;
        }, error => {
          console.log('error');
        }
      );
    }
  }
  public findAll(): Observable<TauxDeIR[]> {
    return this.http.get<TauxDeIR[]>(this._url);
  }

  public errorMsg() {
    if (this.errorS === -1) { return 'Taux de ir est deja existant '; }
    if (this.errorS === -2) { return 'problem au niveau du salaire max ou min'; }
    if (this.errorS === -3) { return 'probel au niveau de la date '; }
    if (this.errorU === -1) { return 'Taux de ir est introuvabke '; }
    if (this.errorU === -2) { return 'problem au niveau du salaire max ou min  '; }
    if (this.errorU === -3) { return 'probel au niveau de la date'; }
  }
  public deleteByRef(ref: string) {
    this.http.delete<number>(this._url + 'delete/' + ref).subscribe(
      data => {
        console.log(data);
        window.location.href = 'http://localhost:4200/tauxDeIR' ;
      }, error => {
        console.log('error');
      }
    );

  }
}
