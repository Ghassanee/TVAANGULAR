import { Injectable } from '@angular/core';
import { Societe } from '../model/societe.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {


  private _soc: Societe;
  private _socs: Array<Societe>;
  private _url = 'http://localhost:8090/impot/societe/';
  constructor(private http: HttpClient) { }
public save() {
  this.http.post<number>(this._url, this.soc).subscribe(
    data => {
      console.log(data);
      if (data > 0) {
        this.socs.push(this.cloneSocs(this.soc));
        this.soc = null;
      }
    }, eror => {
      console.log('eroro');
    }
  );
}
public deleteByRef(societe: Societe) {
  this.http.delete<number>(this._url + 'ref/' + societe.ref).subscribe(
    data => {
console.log('ha data' + data);
this.deleteByRefFromView(societe);
    }, eror => {
      console.log('eroro');
    }
  );

}
  public findByRef(societe: Societe) {
    this.http.get<Societe>(this._url + 'ref/' + societe.ref) .subscribe(
      data => {
        this.soc = data ;
      }
    );

  }

public findAll() {
  this.http.get<Array<Societe>>(this._url).subscribe(
    data => {
      console.log('ha data' + data);
      this.socs = data ;
    }
  );

}

  get soc(): Societe {
    if (this._soc == null) {
      this._soc = new Societe();
    }
    return this._soc;
  }

  set soc(value: Societe) {
    this._soc = value;
  }

  get socs(): Array<Societe> {
    if (this._socs == null) {
      this._socs = new Array<Societe>();
    }
    return this._socs;
  }

  set socs(value: Array<Societe>) {
    this._socs = value;
  }

  private cloneSocs(soc: Societe): Societe {
  const myClone = new Societe() ;
  myClone.id = soc.id ;
  myClone.adresse = soc.adresse ;
  myClone.capital = soc.capital ;
  myClone.nbrEmployes = soc.nbrEmployes ;
  myClone.nom = soc.nom ;
  myClone.ref = soc.ref ;
  myClone.typeSocieteRef = soc.typeSocieteRef ;
  myClone.typeSociete = soc.typeSociete ;
  return myClone;
  }

  public deleteByRefFromView(societe: Societe) {
    const index = this.socs.findIndex(s => s.ref === societe.ref);
    if (index !== -1) {
      this.socs.splice(index, 1);
    }
  }
}
