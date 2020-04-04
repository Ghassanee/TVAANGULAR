import { Component, OnInit } from '@angular/core';
import { TypeSocieteService } from 'src/app/controller/service/type-societe.service';
import { TypeSociete } from 'src/app/controller/model/type-societe.model';

@Component({
  selector: 'app-list-societe',
  templateUrl: './list-societe.component.html',
  styleUrls: ['./list-societe.component.css']
})
export class ListSocieteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
