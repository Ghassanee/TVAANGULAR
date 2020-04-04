import { Component, OnInit } from '@angular/core';
import {FactureGainService} from '../controller/service/facture-gain.service';

@Component({
  selector: 'app-facture-gain',
  templateUrl: './facture-gain.component.html',
  styleUrls: ['./facture-gain.component.css']
})
export class FactureGainComponent implements OnInit {

  constructor(private factureGainService: FactureGainService) { }

  ngOnInit(): void {
  }

}
