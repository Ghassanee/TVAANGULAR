import { Societe } from './societe.model';

export class FactureGain {
  // tslint:disable-next-line:ban-types
  nomFacture: String;
  numeroFacture: number;
  societe: Societe;
  dateFacturation: Date;
  datePaiement: Date;
  declarationTva: number;
  montantHT: number;
  montantTTC: number;
  tva: number;
  // tslint:disable-next-line:ban-types
  client: String;
}
