import { Societe } from './societe.model';

export class Facture {
  nomFacture: string;
  numeroFacture: number;
  societe: Societe;
  dateFacturation: Date;
  datePaiement: Date;
  declarationTva: number;
  declarationTvaRef: string;
  montantHT: number;
  montantTTC: number;
  tva: number;
  societetRef : string;
}

