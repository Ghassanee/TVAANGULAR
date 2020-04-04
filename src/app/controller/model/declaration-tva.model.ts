import {FactureCharge} from './facture-charge.model';
import {FactureGain} from './facture-gain.model';

export class DeclarationTVA {
  public totalTva: number;
  public  ref: string ;
  public  societeRef: string ;
  public  annee: number;
  public  factureCharges = new  Array<FactureCharge>();
  public  factureGains = new Array<FactureGain>();
}
