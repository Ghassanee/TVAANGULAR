import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../controller/service/employee.service';
import { Employee } from '../controller/model/employee.model';
import { SocieteService } from '../controller/service/societe.service';
import { Societe } from '../controller/model/societe.model';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor(private employeService :EmployeeService, private socService : SocieteService) { }

  ngOnInit(): void {
    this.employeService.findAll();
    this.socService.findAll();

  }

  get employe(): Employee {

    return this.employeService.employe;
  }
  get employes(): Array<Employee> {

    return this.employeService.employes;
  }
 public get socs(): Array<Societe> {

    return this.socService.socs;
  }

  public save(){
     this.employeService.save();
  }
  public deleteByCin(employe : Employee){
   this.employeService.deleteByCin(employe);
 }
}
