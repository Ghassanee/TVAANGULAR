import { TypeSociete } from './type-societe.model';

export class Societe {

  public id: number;
  public nom: string;
  public ref: string;
  public adresse: string;
  public nbrEmployes: number;
  public capital: number;
  public typeSociete: TypeSociete;
  public typeSocieteRef: string;
}
