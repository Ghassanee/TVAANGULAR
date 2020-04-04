import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from 'src/app/controller/service/type-societe.service';
import { TypeSociete } from 'src/app/controller/model/type-societe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private typeSocieteService: TypeSocieteService) { }

  ngOnInit(): void {
    this.typeSocieteService.findAll();
  }
  public findAll() {
    return this.typeSocieteService.findAll() ;
  }
  public findByLibelle(typeSociete: TypeSociete) {
    return this.typeSocieteService.findByLibelle(typeSociete);
  }
  public get typeSocs(): Array<TypeSociete> {
    return this.typeSocieteService.typeSocs;
  }

}
