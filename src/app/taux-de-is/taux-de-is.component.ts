import { Component, OnInit } from '@angular/core';
import {TauxDeIRService} from "../controller/service/taux-de-ir.service";
import {TauxDeIR} from "../controller/model/taux-de-ir.model";
import {TauxDeIs} from "../controller/model/taux-de-is.model";
import {TauxDeIsService} from "../controller/service/taux-de-is.service";

@Component({
  selector: 'app-taux-de-is',
  templateUrl: './taux-de-is.component.html',
  styleUrls: ['./taux-de-is.component.css']
})
export class TauxDeIsComponent implements OnInit {

  constructor(private tauxDeIsService: TauxDeIsService) { }
  listTauxDeIs: TauxDeIs[];
  ngOnInit() {
    this.tauxDeIsService.findAll().subscribe(data => {
      this.listTauxDeIs = data;
      console.log(data);
    });
  }
  public save() {
    this.tauxDeIsService.save();
  }
  get tauxDeIs(): TauxDeIs {
    return  this.tauxDeIsService.taux_de_is;
  }
  public update() {
    this.tauxDeIsService.update();
  }
  public errorMsg() {
    return this.tauxDeIsService.errorMsg();
  }
  public deleteByRef(ref: string) {
    this.tauxDeIsService.deleteByRef(ref);
  }

}
