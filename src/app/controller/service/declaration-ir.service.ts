import { Injectable } from '@angular/core';
import {DeclarationIR} from '../model/declaration-ir.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeclarationIRService {
private _declarationIR: DeclarationIR;
private errorS: number ;
private errorU: number ;
  get declarationIR(): DeclarationIR {
 if (this._declarationIR == null) {
   this._declarationIR = new DeclarationIR();
 }
    return this._declarationIR;
  }

  set declarationIR(value: DeclarationIR) {
    this._declarationIR = value;
  }
  private _url = 'http://localhost:8090/impot/declarationIR/';
  constructor(private http: HttpClient) { }
  public save() {
    if (typeof (this.declarationIR.montantDeclaration) === 'number' && typeof (this.declarationIR.salaire) === 'number'
      && (this.declarationIR.ref !== null && this.declarationIR.ref !== '')) {
      this.http.post<number>(this._url, this.declarationIR).subscribe(
        data => {
          console.log(data);
          if (data > 0) {
            window.location.href = 'http://localhost:4200/DeclarationIR';
          }
          this.errorS = data;
        }, error => {
          console.log('error');
        }
      );
    }
  }
  public update() {
    if (this.declarationIR.tauxDeIrRef === '') {
      this.declarationIR.tauxDeIrRef = null ;
    }
    if (this.declarationIR.societeRef === '') {
      this.declarationIR.societeRef = null;
    }
    if (this.declarationIR.emplyeRef === '') {
      this.declarationIR.societeRef = null;
    }
    // tslint:disable-next-line:max-line-length
    if ((this.declarationIR.montantDeclaration == null || typeof (this.declarationIR.montantDeclaration) === 'number') &&
      ( typeof (this.declarationIR.salaire) === 'number' || this.declarationIR.salaire == null )
      && this.declarationIR.ref !== '' ) {
      this.http.post<number>(this._url + 'update/', this.declarationIR).subscribe(
        data => {
          console.log(data);
          window.location.href = 'http://localhost:4200/DeclarationIR' ;
          this.errorU = data;
        }, error => {
          console.log('error');
        }
      );
    }
  }
  public errorMsg() {
    if (this.errorS === -1) { return 'employe introuvable'; }
    if (this.errorS === -2) { return 'societe introuvable'; }
    if (this.errorS === -3) { return 'declaration est deja existant '; }
    if (this.errorS === -4) { return 'taux de IR est introuvable '; }
    if (this.errorU === -3) {return 'declarationIR introuvable'; }
    if (this.errorU === -1) { return 'employe introuvable'; }
    if (this.errorU === -2) { return 'societe introuvable'; }
    if (this.errorU === -4) { return 'taux de IR est introuvable '; }

  }
  public findAll(): Observable<DeclarationIR[]> {
    return this.http.get<DeclarationIR[]>(this._url);
  }
  public removeByRef(ref: string) {
    this.http.delete<number>(this._url + 'ref/' + ref).subscribe(
      data => {
        console.log(data);
        window.location.href = 'http://localhost:4200/DeclarationIR' ;
      }, error => {
        console.log('error');
      }
    );

  }
}
