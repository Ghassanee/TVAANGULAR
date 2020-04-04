import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from '../controller/service/type-societe.service';
import { TypeSociete } from '../controller/model/type-societe.model';
import {Societe} from '../controller/model/societe.model';
import {SocieteService} from '../controller/service/societe.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {


  constructor(private societeService: SocieteService ) { }

  public deleteByRef(societe: Societe) {
    this.societeService.deleteByRef(societe);
  }

public  findByRef(societe: Societe) {
    this.societeService.findByRef(societe);
}

  ngOnInit(): void {
    this.societeService.findAll() ;
  }
  get socs(): Array<Societe> {
    return this.societeService.socs;
  }
  get soc(): Societe {
    return this.societeService.soc;
  }

}
