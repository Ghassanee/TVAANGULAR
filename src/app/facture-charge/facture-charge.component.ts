import { Component, OnInit } from '@angular/core';
import {FactureChargeService} from '../controller/service/facture-charge.service';
import {FactureCharge} from '../controller/model/facture-charge.model';

@Component({
  selector: 'app-facture-charge',
  templateUrl: './facture-charge.component.html',
  styleUrls: ['./facture-charge.component.css']
})
export class FactureChargeComponent implements OnInit {

  constructor(private factureChargeService: FactureChargeService) { }

  ngOnInit(): void {
  }
  get factureCharge(): FactureCharge  {
   return this.factureChargeService.factureCharge;
  }
  public findByNumeroFacture(ref: number) {
  return this.factureChargeService.findByNumeroFacture(ref);
  }
  }
