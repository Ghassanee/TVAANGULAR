import { Injectable } from '@angular/core';
import { TypeSociete } from '../model/type-societe.model';
import {HttpClient} from '@angular/common/http';
import {Societe} from '../model/societe.model';

@Injectable({
  providedIn: 'root'
})
export class TypeSocieteService {
  private _typeSoc: TypeSociete;
  private _typeSocs: Array<TypeSociete>;
  private _url = 'http://localhost:8090/impot/typeSociete/';
  constructor(private http: HttpClient) { }
public findByLibelle(typeSociete: TypeSociete) {
    this.http.get<TypeSociete>(this._url + 'libelle/' + typeSociete.libelle).subscribe(
    data => {
  console.log('ha data' + data);
  this.typeSoc = data ;
}
);
  }
  public findAll() {
    this.http.get<Array<TypeSociete>>(this._url).subscribe(
      data => {
        console.log('ha data' + data);
        this._typeSocs = data ;
      }
    );

  }
  get typeSoc(): TypeSociete {
    if (this._typeSoc == null) {
    this._typeSoc = new TypeSociete();
  }
    return this._typeSoc;
  }

  set typeSoc(value: TypeSociete) {
    this._typeSoc = value;
  }

  get typeSocs(): Array<TypeSociete> {
    if (this._typeSocs == null) {
    this._typeSocs = new Array<TypeSociete>();
  }
    return this._typeSocs;
  }

  set typeSocs(value: Array<TypeSociete>) {
    this._typeSocs = value;
  }

  public add() {
  return this._typeSocs.push(this.clone(this._typeSoc));

}
public clone(e: TypeSociete): TypeSociete {
  const MyClone = new TypeSociete();
  MyClone.id = e.id;
  MyClone.libelle = e.libelle;
  return MyClone;
}

}
