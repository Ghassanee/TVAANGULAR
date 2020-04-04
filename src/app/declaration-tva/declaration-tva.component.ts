import { Component, OnInit } from '@angular/core';
import {DeclarationTVAService} from '../controller/service/declaration-tva.service';
import {DeclarationTVA} from '../controller/model/declaration-tva.model';
import {FactureChargeService} from '../controller/service/facture-charge.service';
import {FactureCharge} from '../controller/model/facture-charge.model';
import {FactureGain} from '../controller/model/facture-gain.model';
import {FactureGainService} from '../controller/service/facture-gain.service';

@Component({
  selector: 'app-declaration-tva',
  templateUrl: './declaration-tva.component.html',
  styleUrls: ['./declaration-tva.component.css']
})
export class DeclarationTVAComponent implements OnInit {

  constructor(private  declarationTVAService: DeclarationTVAService , public  factureChargeService: FactureChargeService ,
              private factureGainService: FactureGainService) { }
  public  listDeclarationTVA: DeclarationTVA[];

  ngOnInit() {
    this.declarationTVAService.findAll().subscribe(data => {
      this.listDeclarationTVA = data;
    });
  }
  get factureCharge(): FactureCharge  {
    return this.factureChargeService.factureCharge;
  }
  get declarationTVA(): DeclarationTVA {
  return this.declarationTVAService.declarationTVA;
  }
  public save() {
    this.declarationTVAService.save();
  }
  public addFactureCharges(factureCharge: FactureCharge) {
    this.declarationTVAService.addFactureCharges(factureCharge);
  }
  public addFactureGains(factureGain: FactureGain) {
    this.declarationTVAService.addFactureGains(factureGain);
  }
  get factureGain(): FactureGain {
  return this.factureGainService.factureGain;
  }
  public showError() {
  return this.declarationTVAService.showError();
  }
  public update() {
  this.declarationTVAService.update();
  }
  public deleteByRef (ref: string) {
    this.declarationTVAService.deleteByRef(ref);
  }
  }
