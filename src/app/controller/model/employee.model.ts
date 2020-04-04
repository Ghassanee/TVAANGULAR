import { Societe } from "./societe.model";

export class Employee {
  public id: number;
  public cin: string;
  public nom: string;
  public prenom: string;
  public adresseHabit: string;
  public adresseMail: string;
  public sexe: string;
  public societe: Societe;
  public societeRef : string;
  public prime: number;
  public salaire: number;
}
