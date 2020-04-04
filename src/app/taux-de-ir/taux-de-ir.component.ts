import { Component, OnInit } from '@angular/core';
import {TauxDeIRService} from '../controller/service/taux-de-ir.service';
import {TauxDeIR} from '../controller/model/taux-de-ir.model';

@Component({
  selector: 'app-taux-de-ir',
  templateUrl: './taux-de-ir.component.html',
  styleUrls: ['./taux-de-ir.component.css']
})
export class TauxDeIRComponent implements OnInit {

  constructor(private tauxDeIRService: TauxDeIRService) { }
listTauxDeIR: TauxDeIR[];
  ngOnInit() {
    this.tauxDeIRService.findAll().subscribe(data => {
      this.listTauxDeIR = data;
    });
  }
public save() {
    this.tauxDeIRService.save();
}
  get tauxDeIR(): TauxDeIR {
    return  this.tauxDeIRService.tauxDeIR;
  }
  public update() {
  this.tauxDeIRService.update();
  }
  public errorMsg() {
  return this.tauxDeIRService.errorMsg();
  }
  public deleteByRef(ref: string) {
  this.tauxDeIRService.deleteByRef(ref);
  }
  }
