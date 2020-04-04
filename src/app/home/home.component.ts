import { Component, OnInit } from '@angular/core';
import { SocieteService } from '../controller/service/societe.service';
import { Societe } from '../controller/model/societe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private socService : SocieteService) { }

  ngOnInit(): void {
    this.socService.findAll();
  }
  public get socs(): Array<Societe> {

    return this.socService.socs;
  }
}
