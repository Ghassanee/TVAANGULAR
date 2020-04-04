import { Component, OnInit } from '@angular/core';
import {DeclarationIR} from '../controller/model/declaration-ir.model';
import {DeclarationIRService} from '../controller/service/declaration-ir.service';

@Component({
  selector: 'app-declaration-ir',
  templateUrl: './declaration-ir.component.html',
  styleUrls: ['./declaration-ir.component.css']
})
export class DeclarationIRComponent implements OnInit {

  constructor(private  declarationIRService: DeclarationIRService) { }
  listDeclarationIR: DeclarationIR[];
  ngOnInit() {
    this.declarationIRService.findAll().subscribe(data => {
      this.listDeclarationIR = data;
    });
  }
  get declarationIR(): DeclarationIR {
  return this.declarationIRService.declarationIR;
  }
  public save() {
    this.declarationIRService.save();
  }
  public errorMsg() {
   return  this.declarationIRService.errorMsg();
  }
  public update() {
  this.declarationIRService.update();
  }
  public removeByRef(ref: string) {
  this.declarationIRService.removeByRef(ref);
  }
  }
