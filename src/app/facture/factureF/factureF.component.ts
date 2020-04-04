import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/controller/service/facture.service';
import { SocieteService } from 'src/app/controller/service/societe.service';
import { DeclarationTVAService } from 'src/app/controller/service/declaration-tva.service';
import { Facture } from 'src/app/controller/model/facture.model';
import { Societe } from 'src/app/controller/model/societe.model';
import { DeclarationTVA } from 'src/app/controller/model/declaration-tva.model';

@Component({
  selector: 'app-factureF',
  templateUrl: './factureF.component.html',
  styleUrls: ['./factureF.component.css']
})
export class FactureChargeComponent implements OnInit {

  constructor(private factureService : FactureService, private socservice : SocieteService,
    private declarationTvaService : DeclarationTVAService) { }

  ngOnInit(): void {
    this.factureService.findAll();
    this.socservice.findAll();
    this.declarationTvaService.findAll();
  }
public save(){
  this.declarationTvaService.save();
  this.factureService.save();

}
  public get facture(): Facture {

    return this.factureService.facture;
  }
  public get factures(): Array<Facture> {

    return this.factureService.factures;
  }
  public get socs(): Array<Societe> {

    return this.socservice.socs;
  }
  public get declarationTVA(): DeclarationTVA {
    return this.declarationTvaService.declarationTVA;
    }

}
