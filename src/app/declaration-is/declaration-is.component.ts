import { Component, OnInit } from '@angular/core';
import {DeclarationIs} from '../controller/model/declaration-is.model';
import {DeclarationIsService} from '../controller/service/declaration-is.service';
import {DeclarationIR} from "../controller/model/declaration-ir.model";

@Component({
  selector: 'app-declaration-is',
  templateUrl: './declaration-is.component.html',
  styleUrls: ['./declaration-is.component.css']
})
export class DeclarationIsComponent implements OnInit {

  constructor(private declarationIsService: DeclarationIsService) { }
  Declarationlistis: DeclarationIs[];
  ngOnInit(): void {
    this.declarationIsService.findAll().subscribe(
      data => {
        this.Declarationlistis = data;
      }
    );
  }
  get declarationIs(): DeclarationIs {
    return this.declarationIsService.declarationis;
  }
 public save() {
   return this.declarationIsService.save();
 }
 public errorMsg() {
    return this.declarationIsService.errorMsg();
 }
 public update() {
    return this.declarationIsService.update();
 }

 public removeByRef(ref : string){
    return this.declarationIsService.removeByRef(ref);
 }

  public montantWithPenality(reftva: string , datefacture: Date , datepaiment: Date) {
  return this.declarationIsService.montantWithPenality(reftva,datefacture,datepaiment);
  }

  public montantPenality(reftva: string , datefacture: Date , datepaiment: Date) {
    return this.declarationIsService.montantPenality(reftva,datefacture,datepaiment);
  }

  public montantWithNoPenality(reftva: string ) {
    return this.declarationIsService.montantWithNoPenality(reftva);
  }

  public totalCharge(reftva: string) {
    return this.declarationIsService.totalCharge(reftva);
  }

  public totalGain(reftva: string) {
    return this.declarationIsService.totalGain(reftva);
  }

  public BeneficeNet(reftva: string) {
    return this.declarationIsService.beneficeNet(reftva);
  }

  }
