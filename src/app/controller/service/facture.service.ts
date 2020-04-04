import { Injectable } from '@angular/core';
import { Facture } from '../model/facture.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private _facture: Facture;
  private _factures: Array<Facture>;
  private _url = 'http://localhost:8090/impot/FactureCharge/';

  constructor(private http: HttpClient) {

   }


   public save() {
    this.http.post<number>(this._url, this.facture).subscribe(
      data => {
        console.log(data);
          this.factures.push(this.cloneFacture(this.facture));
          this.facture = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }

  public findAll() {
    this.http.get<Array<Facture>>(this._url).subscribe(
      data => {
        console.log('ha data' + data);
        this._factures = data ;
      }, eror => {
        console.log('eroro',eror);
      }
    );

  }




  get facture(): Facture {
    if (this._facture == null) {
      this._facture = new Facture();
    }
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }

  get factures(): Array<Facture> {
    if (this._factures == null) {
      this._factures = new Array<Facture>();
    }
    return this._factures;
  }

  set factures(value: Array<Facture>) {
    this._factures = value;
  }

  private cloneFacture(facture: Facture): Facture {
    const myClone = new Facture() ;
    myClone.tva= facture.tva;
    myClone.societetRef=facture.societetRef;
    myClone.societe=facture.societe;
    myClone.numeroFacture=facture.numeroFacture;
    myClone.nomFacture=facture.nomFacture;
    myClone.montantTTC= facture.montantTTC;
    myClone.montantHT = facture.montantHT;
    myClone.declarationTvaRef=facture.declarationTvaRef;
    myClone.declarationTva=facture.declarationTva;
    myClone.datePaiement=facture.datePaiement;
    myClone.dateFacturation = facture.dateFacturation;
    return myClone;
    }

}
