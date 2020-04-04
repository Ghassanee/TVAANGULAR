import { Component, OnInit } from '@angular/core';
import { TypeSociete } from 'src/app/controller/model/type-societe.model';
import { TypeSocieteService } from 'src/app/controller/service/type-societe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private typeSocieteService: TypeSocieteService) { }

  ngOnInit(): void {
  }
  public findByLibelle(typeSociete: TypeSociete) {
    return this.typeSocieteService.findByLibelle(typeSociete);
  }

  public get typeSoc(): TypeSociete {
    return this.typeSocieteService.typeSoc;
  }
  public add() {
    return this.typeSocieteService.add();

  }

}
