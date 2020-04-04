import { Injectable } from '@angular/core';
import {DeclarationIs} from '../model/declaration-is.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeclarationIR} from '../model/declaration-ir.model';
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DeclarationIsService {
  private _declarationis: DeclarationIs;
  private _url = 'http://localhost:8090/impot/declarationIS/';
  private errorS: number ;
  private errorU: number ;

  get declarationis(): DeclarationIs {
    if (this._declarationis == null) {
      this._declarationis = new DeclarationIs();
    }
    return this._declarationis;
  }

  public save() {
    if (this.declarationis.declarationTvaRef !== '' && this.declarationis.reference !== '' && this.declarationis.societeRef !== ''
           && this.declarationis.tauxDeISRef !== '' ) {
      this.http.post<number>(this._url, this.declarationis).subscribe(
        data => {
          console.log(data);
          if (data > 0) {
            window.location.href = 'http://localhost:4200/DeclarationIs';
          }
          this.errorS = data;
        }, error => {
          console.log('error');
        }
      );
    } else { this.errorS = 0; }
  }

  public update() {
    if (this.declarationis.tauxDeISRef === '') {
      this.declarationis.tauxDeISRef == null ;
    }
    if (this.declarationis.societeRef === '') {
      this.declarationis.societeRef == null;
    }
    if (this.declarationis.reference === '') {
      this.declarationis.reference == null;
    }
    if (this.declarationis.declarationTvaRef === '') {
      this.declarationis.reference == null;
    }

    this.http.put<number>(this._url + 'update/', this.declarationis).subscribe(
        data => {
          console.log(data);
          this.errorU = data;
          if (data > 0) {
          window.location.href = 'http://localhost:4200/DeclarationIs' ;

          }
        }, error => {
          console.log('error');
        }
      );
    if (this.declarationis.reference == null || this.declarationis.reference == null || this.declarationis.societeRef == null || this.declarationis.tauxDeISRef == null ) {
       this.errorU = 0;
    }
  }

  public errorMsg() {
    if (this.errorS === -1) { return 'Societe introuvable'; }
    if (this.errorS === -2) { return 'Declaration est deja existant '; }
    if (this.errorS === -3) { return 'Taux de IS est introuvable '; }
    if (this.errorS === -4) { return 'Declaration tva introuvable'; }
    if (this.errorU === -5) { return 'DeclarationIS introuvable'; }
    if (this.errorU === -6) { return 'Taux de IS est introuvable'; }
    if (this.errorU === -7) { return 'Societe introuvable'; }
    if (this.errorU === -8) { return 'Declaration tva introuvable'; }
    if (this.errorS === 0 || this.errorU === 0) { return 'Svp remplir les champs'; }
  }

  set declarationis(value: DeclarationIs) {
    this._declarationis = value;
  }

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<DeclarationIs[]> {
    return this.http.get<DeclarationIs[]>(this._url);
  }

  public removeByRef(reference: string) {
    this.http.delete<number>(this._url + 'DeleteByRef/' + reference).subscribe(
      data => {
        console.log(data);
        window.location.href = 'http://localhost:4200/DeclarationIs';
      }, error => {
        console.log('error');
      }
    );
  }

  public beneficeNet(reftva: string) {
    this.http.get<number>(this._url + 'beneficenet/' + reftva).subscribe(
      data => {
       this.declarationis.benefice = data;
       console.log(data);
      }, error => {
        console.log('erreur beneficenet');
      }

    );

  }

  public totalGain(reftva: string) {
    this.http.get<number>(this._url + 'totalgain/' + reftva).subscribe(
      data => {
        this.declarationis.totalgain = data;
        console.log(data);
      }, error => {
        console.log('erreur totalgain');
      }

    );

  }
  public totalCharge(reftva: string) {
    this.http.get<number>(this._url + 'totalcharge/' + reftva).subscribe(
      data => {
        this.declarationis.totalcharge = data;
        console.log(data);
      }, error => {
        console.log('erreur totalgain');
      }

    );

  }

  public montantWithNoPenality(declarationisref: string) {
    this.http.get<number>(this._url + 'montantWithNoPenality/' + declarationisref).subscribe(
      data => {
        this.declarationis.montantsanspenal = data;
        console.log(data);
      }, error => {
        console.log('erreur montantWithNoPenality');
      }

    );

  }
  public montantPenality(declarationisref: string , datefacture: Date , datepaiment: Date) {
    this.http.get<number>(this._url + 'montantpenality/' + declarationisref + '/' + datefacture + '/' + datepaiment).subscribe(
      data => {
        this.declarationis.montantpenalite = data;
        console.log(data);
      }, error => {
        console.log('erreur montantPenality');
      }
    );
  }

  public montantWithPenality(declarationisref: string , datefacture: Date , datepaiment: Date) {

    this.http.get<number>(this._url + 'montantWithPenality/' + declarationisref + '/' + datefacture + '/' + datepaiment).subscribe(
      data => {
        this.declarationis.montantavecpenalite = data;
        console.log(data);
      }, error => {
        console.log('erreur montantWithPenality');
      }

    );

  }

}
